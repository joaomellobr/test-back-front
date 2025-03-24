package database

import (
	"encoding/csv"
	"os"
	"strconv"
	"strings"
	"timesheetTask/models"
)

func LoadCSV(path string) {
	file, err := os.Open(path)
	if err != nil {
		panic("Error opening CSV: " + err.Error())
	}
	defer file.Close()

	reader := csv.NewReader(file)
	reader.Comma = ','
	reader.Read() // pula o header

	for {
		row, err := reader.Read()
		if err != nil {
			break
		}

		// Conversões
		hours, _ := strconv.ParseFloat(strings.TrimSpace(row[4]), 64)
		billable := row[5] == "Yes"
		billableRate, _ := strconv.ParseFloat(strings.TrimSpace(row[8]), 64)

		entry := models.Timesheet{
			Date:         strings.TrimSpace(row[0]),
			Client:       strings.TrimSpace(row[1]),
			Project:      strings.TrimSpace(row[2]),
			ProjectCode:  strings.TrimSpace(row[3]),
			Hours:        hours,
			Billable:     billable,
			FirstName:    strings.TrimSpace(row[6]),
			LastName:     strings.TrimSpace(row[7]),
			BillableRate: billableRate,
		}

		DB.Create(&entry)
	}
}
