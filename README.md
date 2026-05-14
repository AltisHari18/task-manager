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

Add screenshot here.

```md
<img width="1912" height="1073" alt="image" src="https://github.com/user-attachments/assets/779afe1e-2fff-472e-a371-47386c489604" />

```

---

## Register Page

Add screenshot here.

```md
<img width="1915" height="1077" alt="image" src="https://github.com/user-attachments/assets/dea440a9-bbbf-4801-bd03-5d2a853dca9b" />

```

---

## Dashboard

Add screenshot here.

```md
<img width="1918" height="1076" alt="image" src="https://github.com/user-attachments/assets/4b774da8-85a9-4a65-8103-8e83025d691f" />

```

---

## Task Creation

Add screenshot here.

```md
<img width="1917" height="1074" alt="image" src="https://github.com/user-attachments/assets/197e755b-0697-4c39-99d1-8d1b491dd57e" />

```

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
