package main

import (
	"timesheetTask/database"
	_ "timesheetTask/docs"
	"timesheetTask/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func main() {
	r := gin.Default()
	// Permite requisições entre domínios
	r.Use(cors.Default())

	database.Connect()
	database.LoadCSV("data/timesheets.csv")
	routes.SetupRoutes(r)
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	r.Run(":8000")
}
