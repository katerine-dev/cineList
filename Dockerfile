# ----------------------------
# Etapa 1: Construir o Frontend
# ----------------------------
    FROM node:20 AS frontend-builder

    WORKDIR /app/spa
    
    # Copiar arquivos do frontend
    COPY spa/package.json spa/package-lock.json ./
    RUN npm install
    
    COPY frontend/ ./
    RUN npm run build

# ----------------------------
# Etapa 1: Construir o Backend
# ----------------------------
    FROM maven:3.8.8-eclipse-temurin-21 AS backend-builder

    WORKDIR /app
    
    # Copia os arquivos do backend
    COPY pom.xml .
    COPY src ./src
    
    # Constrói o backend
    RUN mvn clean package -DskipTests
    
    # ----------------------------
    # Etapa 2: Executar a Aplicação
    # ----------------------------
    FROM eclipse-temurin:21-jre
    
    WORKDIR /app
    
    # Comando para verificar a versão do Java (apenas para debug temporário)
    RUN java -version
    
    # Copia o JAR gerado
    COPY --from=backend-builder /app/target/*.jar app.jar
    
    EXPOSE 8081
    
    CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.profiles.active=prod -jar app.jar"]





    