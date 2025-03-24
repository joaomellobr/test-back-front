package routes

import (
	"timesheetTask/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/entries", controllers.GetAll)
	r.GET("/entries/:client", controllers.GetByClient)
	r.POST("/entries", controllers.CreateEntry)
	r.GET("/summary", controllers.GetSummary)
}
