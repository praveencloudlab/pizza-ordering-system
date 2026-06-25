# FireCrust Ordering System

FireCrust is a full-stack pizza ordering platform inspired by modern food delivery applications. It is built as a production-style portfolio project using Next.js, Spring Boot, MySQL, Docker, GitHub Actions, and cloud deployment.

## Project Goals

* Build a professional customer ordering website
* Create a Spring Boot backend with MySQL
* Implement cart, checkout, authentication, order tracking, and admin features
* Add CI/CD using GitHub Actions
* Deploy frontend and backend to cloud platforms

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React

### Backend

* Java 21
* Spring Boot
* Spring Security
* JWT
* MySQL
* REST APIs
* Swagger/OpenAPI

### DevOps

* GitHub
* GitHub Actions
* Docker
* AWS / Cloud Deployment

## Project Structure

```text
pizza-ordering-system/
│
├── frontend/        # Next.js customer web application
├── backend/         # Spring Boot backend services
├── database/        # SQL scripts and migrations
├── docs/            # Architecture, API, database and screenshots
├── docker/          # Docker configuration
└── README.md
```

## Features Planned

### Customer

* Home page
* Product menu
* Category browsing
* Product customization
* Shopping cart
* Checkout
* Login and registration
* Order tracking

### Admin

* Dashboard
* Product management
* Category management
* Coupon management
* Order management
* Customer management

### Backend

* Authentication service
* Catalog service
* Order service
* Payment service
* Notification service

## Local Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

### Backend

Backend setup will be added after Spring Boot services are created.

## Database

Local database:

```sql
CREATE DATABASE pizza_ordering_system;
```

## Current Status

* Frontend project created
* Tailwind CSS configured
* shadcn/ui configured
* Homepage structure created
* Hero section completed
* Category cards completed
* Product card module in progress

## Author

Praveenreddy Somireddy

GitHub: praveencloudlab
