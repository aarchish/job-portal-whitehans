# Job Portal

This is a simple job listing portal where users can view available job listings, search and filter jobs by title, location, and type. The application also includes basic authentication with login and sign-up functionality.

## Setup & Installation

## Requirements ##
MySQL Server Instance Running with a database pre-created

## Clone the repository ##
git clone https://github.com/aarchish/job-portal-whitehans.git

### Backend

1. **Navigate to Backend Service**

   cd job-portal-whitehans/backend

2. **Setup Environment Variables**

    Create a .env file with the following secrets defined
    SERVER_PORT=
    SPRING_DATASOURCE_URL=
    SPRING_DATASOURCE_USERNAME=
    SPRING_DATASOURCE_PASSWORD=
    CORS_ALLOWED_ORIGINS=
    DEFAULT_USERNAME=
    DEFAULT_PASSWORD=

    SPRING_DATASOURCE_URL is of type
        jdbc:mysql://<host url with port if required>/<database name>

    CORS_ALLOWED_ORIGINS is the url of React app deployment
    
3. **Build and Run the Backend Service**
    **Run the following commands**

    mvn dependency:go-offline
    RUN mvn clean package -Dmaven.skip.tests=true
    cd ./target
    java job-portal-backend-0.0.1-SNAPSHOT.jar


### Frontend

1. **Navigate to Backend Service**

   cd job-portal-whitehans/frontend

2. **Setup Environment Variables**

    Create a .env file with the following secrets defined
    VITE_API_BASE_URL=
    VITE_BACKEND_USERNAME=
    VITE_BACKEND_PASSWORD=

    SPRING_DATASOURCE_URL is of type
        http/https://<host url with port if required>
    
3. **Build and Run the Backend Service**
    **Run the following commands**

    npm install
    npm run build

## Brief Documentation of Approach

## Backend

# Spring Boot Application: 
    The backend is built using Spring Boot. It includes RESTful APIs for job listings.
# Security Configuration:
    Spring Security is used to handle authentication and authorization. Basic authentication is implemented for simplicity.
# Database: MySQL is used as the database. JPA is used for ORM.

## Frontend

# React Application:
    The frontend is built using React and Vite for fast development.
# Material-UI:
    Material-UI is used for styling and UI components.
# React Router:
    React Router is used for navigation.
# Axios:
    Axios is used for making HTTP requests to the backend.