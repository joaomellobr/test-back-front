package models

type Timesheet struct {
	ID           uint    `json:"id" gorm:"primaryKey"`
	Date         string  `json:"date"`
	Client       string  `json:"client"`
	Project      string  `json:"project"`
	ProjectCode  string  `json:"project_code"`
	Hours        float64 `json:"hours"`
	Billable     bool    `json:"billable"`
	FirstName    string  `json:"first_name"`
	LastName     string  `json:"last_name"`
	BillableRate float64 `json:"billable_rate"`
}
