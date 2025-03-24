import { useEffect, useState } from 'react';
import api from '../services/api';
import { TimesheetSummary } from '../types';
import { parseError } from '../services/errorTypes';

export const useTimesheetSummary = () => {
  const [summary, setSummary] = useState<TimesheetSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get('/summary')
      .then((res) => setSummary(res.data))
      .catch((err) => setError(parseError(err)))
      .finally(() => setLoading(false));
  }, []);

  return { summary, loading, error };
};
