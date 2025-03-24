export enum ErrorTypes {
    NETWORK = 'NETWORK',
    TIMEOUT = 'TIMEOUT',
    UNKNOWN = 'UNKNOWN',
  }
  
  export const parseError = (error: any): string => {
    if (!error.response) return ErrorTypes.NETWORK;
    if (error.code === 'ECONNABORTED') return ErrorTypes.TIMEOUT;
    return ErrorTypes.UNKNOWN;
  };