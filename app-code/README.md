# 🌍 WanderLust – Full‑Stack Travel Listing Platform

**Live Demo:** [https://wanderlust-sunil7chinta.onrender.com/](https://wanderlust-sunil7chinta.onrender.com/)

WanderLust is a **full‑stack web application** inspired by Airbnb, built to demonstrate real‑world backend, database, cloud, and deployment skills. The application enables users to explore travel listings, create and manage their own listings, upload images, view locations on maps, and leave reviews — all with secure authentication and session management.

This project is designed with **production‑level practices** and is suitable for showcasing **backend, cloud, and full‑stack engineering skills**.

---

## 🚀 Key Features

* User authentication (Register / Login / Logout)
* Create, edit, and delete travel listings
* Image uploads with Cloudinary integration
* Interactive maps using Mapbox (geocoding & location display)
* Reviews and ratings for listings
* Secure session handling with MongoDB session store
* Flash messages for user feedback
* Centralized error handling and server‑side validation

---

## 🛠️ Tech Stack

### Frontend

* EJS with EJS‑Mate (layout & templating)
* HTML, CSS, Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose

### Cloud & External Services

* MongoDB Atlas – Database hosting
* Cloudinary – Image storage and optimization
* Mapbox – Location geocoding and maps

### Deployment

* Render (Production deployment)

---

## 🧩 Application Architecture

* **MVC pattern** for clean separation of concerns
* Controllers handle business logic
* Routes manage application endpoints
* Mongoose models define database schema
* Utility layers for reusable logic
* Secure session storage using MongoDB

---

## 📂 Project Structure

```
WanderLust-project/
│
├── models/            # Mongoose schemas
├── routes/            # Express routes
├── controllers/       # Business logic
├── views/             # EJS templates
├── public/            # Static assets (CSS, JS)
├── utils/             # Helper utilities & middleware
├── initDB/            # Initial dataset (not required for production)
├── app.js             # Express app configuration
├── package.json
└── README.md
```

---

## ⚙️ Local Setup Instructions

### Prerequisites

* Node.js (v18+ recommended)
* npm
* MongoDB Atlas account
* Cloudinary account
* Mapbox account

---

### Environment Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

---

### Installation & Run

```bash
git clone https://github.com/sunil7chinta/WanderLust-project.git
cd WanderLust-project
npm install
node app.js
```

Access locally at:

```
http://localhost:3000
```

---

## 🔐 Security & Best Practices

* Passwords hashed using Passport
* Sessions stored securely in MongoDB
* Environment variables used for all secrets
* Input validation and centralized error handling

---

## 🎯 What This Project Demonstrates

* Building scalable backend applications with Express & MongoDB
* Secure authentication and session management
* Cloud service integration (Cloudinary, Mapbox, MongoDB Atlas)
* Production deployment and environment configuration
* Clean project structure following industry patterns

---

⭐ **This project reflects real‑world full‑stack development practices and backend‑focused engineering skills.**
