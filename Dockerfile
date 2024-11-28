# ----------------------------
# Step 1: Build the Frontend
# ----------------------------
    FROM node:20 AS frontend-builder

    WORKDIR /app/spa
    
    # Copy frontend package files
    COPY spa/package.json spa/package-lock.json ./
    RUN npm install
    
    COPY spa/ ./
    RUN npm run build
    
    # ----------------------------
    # Step 2: Build the Backend
    # ----------------------------
    FROM maven:3.8.8-eclipse-temurin-21 AS backend-builder
    
    WORKDIR /app
    
    # Copy backend pom.xml
    COPY pom.xml .
    
    # Copy backend source code
    COPY src ./src
    
    # Copy built frontend assets into backend resources
    COPY --from=frontend-builder /app/spa/dist/ ./src/main/resources/static/
    
    # Build the backend
    RUN mvn clean package -DskipTests
    
    # ----------------------------
    # Step 3: Run the Application
    # ----------------------------
    FROM eclipse-temurin:21-jre
    
    WORKDIR /app
    
    # Copy the generated JAR
    COPY --from=backend-builder /app/target/*.jar app.jar
    
    EXPOSE 8080
    
    CMD ["java", "-Dserver.port=${PORT}", "-Dspring.profiles.active=prod", "-jar", "app.jar"]
    