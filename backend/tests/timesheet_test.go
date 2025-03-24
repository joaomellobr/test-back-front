package tests

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"timesheetTask/controllers"
	"timesheetTask/database"
	"timesheetTask/models"

	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/entries", controllers.GetAll)
	return r
}

func TestGetAllEntries(t *testing.T) {
	database.Connect()
	database.DB.Create(&models.Timesheet{
		Date:         "4/3/17",
		Client:       "Olith",
		Project:      "Pharos",
		ProjectCode:  "DV002",
		Hours:        7.69,
		Billable:     true,
		FirstName:    "Hubert",
		LastName:     "Green",
		BillableRate: 80,
	})

	router := setupRouter()

	req, _ := http.NewRequest("GET", "/entries", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status 200 but got %d", w.Code)
	}
}
