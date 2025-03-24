package controllers

import (
	"math"
	"net/http"
	"timesheetTask/database"
	"timesheetTask/models"

	"github.com/gin-gonic/gin"
)

// GetAll godoc
// @Summary List all timesheet entries
// @Description Returns all entries from the database
// @Tags entries
// @Produce json
// @Success 200 {array} models.Timesheet
// @Router /entries [get]
func GetAll(c *gin.Context) {
	var entries []models.Timesheet
	database.DB.Find(&entries)
	c.JSON(http.StatusOK, entries)
}

// GetSummary godoc
// @Summary      Get timesheet summary
// @Description  Returns aggregated hours and billable amounts grouped by client and project
// @Tags         summary
// @Produce      json
// @Success      200  {array}  models.TimesheetSummary
// @Router       /summary [get]
func GetSummary(c *gin.Context) {
	var entries []models.Timesheet
	database.DB.Find(&entries)

	summaryMap := make(map[string]*models.TimesheetSummary)

	for _, e := range entries {
		if _, ok := summaryMap[e.Client]; !ok {
			summaryMap[e.Client] = &models.TimesheetSummary{
				Client: e.Client,
				Name:   e.FirstName,
			}
		}

		summaryMap[e.Client].Hours += e.Hours

		if e.Billable {
			summaryMap[e.Client].BillableHours += e.Hours
			summaryMap[e.Client].BillableAmount += e.Hours * e.BillableRate
		}
	}

	var summaryList []models.TimesheetSummary
	for _, v := range summaryMap {
		// Arredondar os valores
		v.Hours = math.Round(v.Hours*100) / 100
		v.BillableHours = math.Round(v.BillableHours*100) / 100
		v.BillableAmount = math.Round(v.BillableAmount*100) / 100
		summaryList = append(summaryList, *v)
	}

	c.JSON(http.StatusOK, summaryList)
}

// CreateEntry godoc
// @Summary Create a new timesheet entry
// @Description Add a new timesheet entry to the database
// @Tags entries
// @Accept json
// @Produce json
// @Param entry body models.Timesheet true "New timesheet entry"
// @Success 201 {object} models.Timesheet
// @Failure 400 {object} models.ErrorResponse
// @Failure 500 {object} models.ErrorResponse
// @Router /entries [post]
func CreateEntry(c *gin.Context) {
	var entry models.Timesheet

	if err := c.ShouldBindJSON(&entry); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := database.DB.Create(&entry)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusCreated, entry)
}

// GetByClient godoc
// @Summary Get entries by client
// @Description Returns all timesheet entries for a specific client
// @Tags entries
// @Produce json
// @Param client path string true "Client name"
// @Success 200 {array} models.Timesheet
// @Failure 500 {object} models.ErrorResponse
// @Router /entries/{client} [get]
func GetByClient(c *gin.Context) {
	client := c.Param("client")
	var entries []models.Timesheet

	result := database.DB.Where("client = ?", client).Find(&entries)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, entries)
}
