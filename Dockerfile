# ----------------------------
# Stage 1: Build Backend
# ----------------------------
FROM maven:3.8.7-eclipse-temurin-17-alpine AS backend-builder

WORKDIR /app

# Copia o código-fonte e arquivos de configuração para o container
COPY pom.xml .
COPY src ./src

# Faz o download das dependências e compila a aplicação
RUN mvn clean package -DskipTests

# ----------------------------
# Stage 2: Run Application
# ----------------------------
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copia o arquivo JAR gerado na etapa anterior para o container
COPY --from=backend-builder /app/target/*.jar app.jar

# Expor a porta padrão (ou a que você configurou no application.properties)
EXPOSE 10000

# Comando para rodar a aplicação
CMD ["java", "-Dspring.profiles.active=prod", "-Dserver.port=10000", "-jar", "app.jar"]