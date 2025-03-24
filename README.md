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
💡 If you don’t have Yarn installed yet, you can install it globally with:
`npm install --global yarn`

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

## ✅ Development Enhancements
- Add Git hooks with Husky
- Automatically run linting and tests before commits and pushes to prevent bad code from reaching the repository.
- Achieve 95%+ Test Coverage
- Add unit and integration tests for all major components, reducers, hooks, and services.
- Add Prettier integration
- Ensure consistent code formatting across the team and automated formatting with lint-staged.
- Enable automatic code analysis with GitHub Actions (CI/CD)
- Automate test execution, coverage, and linting on every pull request.
- Add an .editorconfig file
- Define consistent indentation, charset, and line endings across all editors.
- Use absolute imports
- Improve readability by avoiding long relative paths in imports.
- Create a reusable form system or hook
- For components like the editable modal, consider extracting logic into a reusable useForm hook or similar.
- Improve error boundary handling
- Wrap the app in an error boundary to catch unexpected runtime errors gracefully.
- Add accessibility (a11y) best practices
- Labels, focus management in modals, proper button semantics, etc.
