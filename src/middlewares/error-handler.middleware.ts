import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { rejection } from '../enums/rejection.enum';
/**
 * interceptor to alert error message in API failure
 */
export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    switch (action.payload.status) {
      case rejection.notFound:
        console.log('NOT FOUND !');
        break;
      case rejection.unauthorized:
        console.log('UNAUTHORIZED!');
        break;
      case rejection.serverError:
        console.log('INTERNAL SERVER ERROR!');
        break;

      default:
        break;
    }
  }
  return next(action);
};
