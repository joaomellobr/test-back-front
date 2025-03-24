package database

import (
	"timesheetTask/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	db, err := gorm.Open(sqlite.Open("timesheets.db"), &gorm.Config{})
	if err != nil {
		panic("Error connecting to database")
	}
	db.AutoMigrate(&models.Timesheet{})
	DB = db
}
