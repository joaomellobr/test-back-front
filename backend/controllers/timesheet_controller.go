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
