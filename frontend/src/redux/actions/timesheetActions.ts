import { Dispatch } from 'redux';
import api from '../../services/api';
import { TimesheetEntry } from '../../types';

export const FETCH_ENTRIES_REQUEST = 'FETCH_ENTRIES_REQUEST';
export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';
export const FETCH_ENTRIES_FAILURE = 'FETCH_ENTRIES_FAILURE';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const fetchEntries = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_ENTRIES_REQUEST });
  try {
    const response = await api.get('/summary');
    dispatch({ type: FETCH_ENTRIES_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: FETCH_ENTRIES_FAILURE, payload: error.message });
  }
};

export const deleteEntry = (id: number) => async (dispatch: Dispatch) => {
  await api.delete(`/entries/${id}`);
  dispatch({ type: DELETE_ENTRY, payload: id });
};