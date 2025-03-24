import {
    FETCH_ENTRIES_REQUEST,
    FETCH_ENTRIES_SUCCESS,
    FETCH_ENTRIES_FAILURE,
    DELETE_ENTRY,
  } from '../actions/timesheetActions';
  import { TimesheetEntry } from '../../types';
  
  type State = {
    entries: TimesheetEntry[];
    isLoading: boolean;
    error: string | null;
  };
  
  const initialState: State = {
    entries: [],
    isLoading: false,
    error: null,
  };
  
  const timesheetReducer = (state = initialState, action: any): State => {
    switch (action.type) {
      case FETCH_ENTRIES_REQUEST:
        return { ...state, isLoading: true };
      case FETCH_ENTRIES_SUCCESS:
        return { ...state, isLoading: false, entries: action.payload };
      case FETCH_ENTRIES_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      case DELETE_ENTRY:
        return {
          ...state,
          entries: state.entries.filter(e => e.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default timesheetReducer;