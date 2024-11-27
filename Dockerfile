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
    
    CMD ["java", "-jar", "target/cine-list-0.0.1-SNAPSHOT.jar", "-Dspring.profiles.active=prod"]
    