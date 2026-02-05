# 🌍 WanderLust – Full-Stack Travel Listing Platform

**Live Demo:** [https://wanderlust-sunil7chinta.onrender.com/](https://wanderlust-sunil7chinta.onrender.com/)

WanderLust is a **full-stack web application** inspired by Airbnb, built to demonstrate real-world backend, database, cloud, and deployment skills. The application enables users to explore travel listings, create and manage their own listings, upload images, view locations on maps, and leave reviews — all with secure authentication and session management.

This project is designed with **production-level practices** and is suitable for showcasing **backend, cloud, full-stack, and DevOps engineering skills**.

---

## 🚀 Key Features

* User authentication (Register / Login / Logout)
* Create, edit, and delete travel listings
* Image uploads with Cloudinary integration
* Interactive maps using Mapbox (geocoding & location display)
* Reviews and ratings for listings
* Secure session handling with MongoDB session store
* Flash messages for user feedback
* Centralized error handling and server-side validation
* RESTful routing structure

---

## 🛠️ Tech Stack

### Frontend

* EJS with EJS-Mate (layout & templating)
* HTML, CSS, Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose
* Passport.js (Authentication)
* Express-Session

### Cloud & External Services

* MongoDB Atlas – Database hosting
* Cloudinary – Image storage and optimization
* Mapbox – Location geocoding and maps

### DevOps & Deployment

* Docker & Docker Compose
* Render (Production deployment)

---

## 🧩 Application Architecture

* **MVC pattern** for clean separation of concerns
* Controllers handle business logic
* Routes manage application endpoints
* Mongoose models define database schema
* Utility layers for reusable logic and middleware
* Secure session storage using MongoDB
* Environment-based configuration management

---

## 📂 Project Structure

```
WanderLust-project/
│
├── app-code/ # Complete application source code
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── controllers/ # Business logic
│ ├── views/ # EJS templates
│ ├── public/ # Static assets (CSS, JS)
│ ├── utils/ # Helper utilities & middleware
│ ├── initDB/ # Initial dataset (development only)
│ ├── cloudConfig.js
│ ├── middleware.js
│ ├── app.js # Express app configuration
│ ├── package.json
│ └── package-lock.json
│
├── Dockerfile # Container build configuration
├── docker-compose.yml # Multi-container orchestration
├── .dockerignore
└── README.md
```

---

> Note: All application logic resides inside the `app-code/` directory.

---

## ⚙️ Local Setup Instructions (Without Docker)

### Prerequisites

* Node.js (v18+ recommended)
* npm
* MongoDB Atlas account
* Cloudinary account
* Mapbox account

---

### Environment Configuration

Create a `.env` file inside the `app-code/` directory:

```env
PORT=3000
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

---

## 🚀 Installation & Run (Without Docker)

```bash
git clone https://github.com/sunil7chinta/WanderLust-project.git
cd WanderLust-project/app-code
npm install
node app.js
```

Access Locally:

```
http://localhost:3000
```
---

## 🐳 Running with Docker (Recommended)

Since Docker configuration is available at the root level, you can run the application containerized.

### 🔹 Build the Docker Image

```bash
docker build -t wanderlust-app .
```
### 🔹 Run the Container

```bash
docker run -p 3000:3000 --env-file app-code/.env wanderlust-app
```

---

## 🔹 Using Docker Compose (Preferred)

```bash
docker-compose up --build
```
Access Locally:

```
http://localhost:3000
```
---

## 🔐 Security & Best Practices

* Passwords hashed using Passport authentication strategy
* Sessions stored securely in MongoDB
* Environment variables used for all secrets
* Input validation and centralized error handling
* RESTful routing conventions
* Modular MVC structure
* Containerized runtime environment

---

## 🎯 What This Project Demonstrates

* Building scalable backend applications with Express & MongoDB
* Secure authentication and session management
* Cloud service integration (Cloudinary, Mapbox, MongoDB Atlas)
* Production deployment and environment configuration
* Containerization using Docker & Docker Compose
* Clean project structure following industry patterns

---

⭐ **This project reflects real-world full-stack development practices with strong backend and DevOps engineering focus.**