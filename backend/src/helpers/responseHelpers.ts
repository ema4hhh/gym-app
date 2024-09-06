import { Response } from 'express';
import { type ApiResponse } from '../../types.d';

export function sendJsonResponse(params: {res: Response, statusCode?: number, data?: any} & ApiResponse) {
    const {
        res,
        statusCode,
        message,
        token,
        user,
        data
    } = params

  const response: ApiResponse = {
    message,
    token,
    user,
    data
  };

  if (statusCode) {
    res.status(statusCode).json(response)
  }

  res.json(response);
}
