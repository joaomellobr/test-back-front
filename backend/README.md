# 🛠️ Backend - TimesheetTask

API RESTful construída com **Go**, usando **Gin**, **GORM**, **Swagger** e leitura inicial de dados via CSV.

## ▶️ Como rodar

```bash
# Instale as dependências
go mod tidy

# Gere a documentação Swagger
swag init

# Execute o servidor
go run main.go
```

- Acesse a API: http://localhost:8000
- Acesse o Swagger: http://localhost:8000/swagger/index.html

## 📂 Funcionalidades

- [x] CRUD completo de registros de timesheet
- [x] Filtro por cliente
- [x] Documentação automática com Swagger
- [x] Estrutura organizada por controllers, models, routes

## 🧪 Testes

```bash
go test ./...
```

Feito com Go, rápido e simples! 🚀