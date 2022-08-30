import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

/**
 * interceptor to alert error message in API failure
 */
export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) {
      alert('error');
    }
  }
  return next(action);
};
