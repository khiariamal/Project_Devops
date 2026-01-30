# DevOps Inscription Application

## Description
This project is a simple prototype of a user registration (sign up) application.
It is developed as part of the DevOps module and will serve as a base project
to apply DevOps concepts throughout the semester.

The application allows users to register by providing basic information.

## Technologies Used
- Frontend: Angular
- Backend: Spring Boot
- Database: PostgreSQL

## Project Structure
Project_Devops
├── devopsapp           (Spring Boot Backend)
├── devops-frontend     (Angular Frontend)

## Main Features
- User registration (Sign up)
- REST API for communication between frontend and backend
- Data persistence using PostgreSQL

## How to Run the Project Locally

### Backend (Spring Boot)
1. Open the `devopsapp` folder
2. Configure the database in `application.properties`
3. Run the application using:
   - `mvn spring-boot:run`
   - or run the main class from your IDE
4. Backend runs on: `http://localhost:8080`

### Frontend (Angular)
1. Open the `devops-frontend` folder
2. Install dependencies:
   - `npm install`
3. Start the Angular application:
   - `ng serve`
4. Frontend runs on: `http://localhost:4200`


## Author
Amal Khiari
