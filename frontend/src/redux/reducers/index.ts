import { combineReducers } from 'redux';
import timesheetReducer from './timesheetReducer';

const rootReducer = combineReducers({
  timesheet: timesheetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;