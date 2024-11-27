# ----------------------------
# Etapa 1: Construir o Backend
# ----------------------------
    FROM maven:3.8.8-eclipse-temurin-21 AS backend-builder

    WORKDIR /cineList/src
    
    # Copia o código do backend
    COPY pom.xml .
    COPY src ./src
    
    # Constrói o backend
    RUN mvn clean package -DskipTests
    
    # ----------------------------
    # Etapa 2: Executar a Aplicação
    # ----------------------------
    FROM eclipse-temurin:21-jre
    
    WORKDIR /cineList
    
    # Copia o JAR gerado na etapa anterior
    COPY --from=backend-builder /cineList/scr/target/*.jar cine-list-0.0.1-SNAPSHOT.jar.jar
    
    # Exponha a porta usada pelo backend
    EXPOSE 8081
    
    # Comando para executar a aplicação
    CMD ["java", "-Dspring.profiles.active=render","-Dserver.port=8081", "-jar", "cine-list-0.0.1-SNAPSHOT.jar"]
    
