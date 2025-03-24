package models

type TimesheetSummary struct {
	Name           string  `json:"name" example:"Pharos"`
	Client         string  `json:"client" example:"Olith"`
	Hours          float64 `json:"hours" example:"42.5"`
	BillableHours  float64 `json:"billable_hours" example:"38.0"`
	BillableAmount float64 `json:"billable_amount" example:"3040.00"`
}
