# ----------------------------
# Etapa 2: Construir o Backend
# ----------------------------
    FROM maven:3.8.8-eclipse-temurin-21 AS backend-builder

    WORKDIR /cineList/backend
    
    # Copia o código do backend
    COPY pom.xml .
    COPY src ./src
    
    # Constrói o backend
    RUN mvn clean package -DskipTests
    
    # ----------------------------
    # Etapa 3: Executar a Aplicação
    # ----------------------------
    FROM openjdk:21-jre-slim
    
    WORKDIR /cineList
    
    # Copia o JAR gerado na etapa anterior
    COPY --from=backend-builder /cineList/backend/target/*.jar app.jar
    
    # Exponha a porta usada pelo backend
    EXPOSE 8081
    
    # Comando para executar a aplicação
    CMD ["java", "-Dspring.profiles.active=prod", "-jar", "app.jar"]
    