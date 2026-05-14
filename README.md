# MERN Task Management Application

A full-stack Task Management Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to register, login, create tasks, update task status, and delete tasks.

---

# Features

* User Authentication & Authorization (JWT)
* Register & Login System
* Create Tasks
* View Tasks
* Update Task Status
* Delete Tasks
* Responsive UI using Tailwind CSS
* MongoDB Atlas Database Integration
* REST API Integration
* Full MERN Stack Architecture

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* CORS
* dotenv

---

# Project Structure

```bash
Task-Manager/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
```

---

# Backend Setup

## Go to Backend Folder

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run Backend Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Go to Frontend Folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

---

## Task Routes

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get All Tasks |
| POST   | /api/tasks     | Create Task   |
| PUT    | /api/tasks/:id | Update Task   |
| DELETE | /api/tasks/:id | Delete Task   |

---

# Screenshots

## Login Page




(./images/login.png)



---

## Register Page




./images/register.png



---

## Dashboard



./images/dash.png



---

## Task Creation




./images/taskCreation.png



---

# Future Enhancements

* Real-Time Updates using Socket.io
* Task Due Dates
* Task Priority Levels
* Dark Mode
* Search & Filter Tasks
* Drag and Drop Task Management

---

# Learning Outcomes

This project helped in understanding:

* Full-stack MERN architecture
* REST API integration
* JWT Authentication
* CRUD operations
* MongoDB database handling
* Frontend-backend communication
* Responsive UI development

---

# Author

Hari Prakash

GitHub: [https://github.com/AltisHari18](https://github.com/AltisHari18)

---

# License

This project is developed for educational and internship purposes.
