export interface TimesheetSummary {
  name: string;
  client: string;
  hours: number;
  billable_hours: number;
  billable_amount: number;
}

export interface TimesheetEntry {
  id: number;
  date: string;
  client: string;
  project: string;
  project_code: string;
  hours: number;
  billable: boolean;
  first_name: string;
  last_name: string;
  billable_rate: number;
}
