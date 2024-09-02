import { Response } from 'express';
import { type ApiResponse } from '../../types.d';

export function sendJsonResponse(params: {res: Response, statusCode?: number} & ApiResponse) {
    const {
        res,
        statusCode,
        message,
        token,
        user
    } = params

  const response: ApiResponse = {
    message,
    token,
    user
  };

  if (statusCode) {
    res.status(statusCode).json(response        )
  }

  res.json(response);
}
