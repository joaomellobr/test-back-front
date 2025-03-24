# 📊 TimesheetTask – Fullstack Project (Go + React)
This project is a complete time tracking (timesheet) application, with a Go backend and a React + TypeScript frontend, including:

✅ Frontend styled with styled-components
✅ Integrated Swagger documentation on the backend



---

## 🔧 Prerequisites
Go 1.18+ (https://go.dev/)

Node.js 18+ (https://nodejs.org/)

Yarn (https://yarnpkg.com/)

SQLite (optional, managed by GORM)

---

## 📂 Project Structure

```
timesheetTask/
├── backend/          # Go REST API with Swagger and GORM
├── frontend/         # React + TS + Vite + Redux + Styled-components
├── docs/             # Auto-generated Swagger docs
└── README.md         # General documentation (this file)
```

---

## ▶️ How to Run the Project

### 1️⃣ Backend (Go + Gin + GORM + Swagger)

```bash
cd backend

# Install dependencies
go mod tidy

# Generate Swagger documentation
go install github.com/swaggo/swag/cmd/swag@latest
export PATH="$PATH:$(go env GOPATH)/bin"
source ~/.zshrc
swag init

# Start the server
go run main.go
```

Access the API: http://localhost:8000  
Access the Swagger: http://localhost:8000/swagger/index.html

---

### 2️⃣ Frontend (React + TypeScript + Vite + Yarn)

```bash
cd frontend

# Install dependencies
yarn install

# Start the frontend
yarn dev
```

Access the application at the port displayed by Vite, usually:
👉 http://localhost:5173

If a different port is shown in the terminal, use that one instead.



---

## 💡 Highlights

- Architecture based on SOLID principles and Clean Code
- Styling via styled-components with centralized theming
- Fully documented API with Swagger
- Desktop-friendly UI layout
- Well-structured and reusable components

---
