import { NextFunction, Request, Response } from "express";
import { BAD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";
import { ApiResponse } from "../../types";
const jwt = require('jsonwebtoken');

declare global {
    namespace Express {
      interface Request {
        user: string;
      }
    }
  }

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      const response: ApiResponse = {
        message: BAD_SERVER_RESPONSE.TOKEN_VERIFY_ERROR
      }

      return sendJsonResponse({
        ...response,
        res,
        statusCode: 401
      });
    };

    jwt.verify(token, process.env.JWT_SECRET, (err: Error, user: any) => {
      if (err) {
        const response: ApiResponse = {
          message: BAD_SERVER_RESPONSE.TOKEN_VERIFY_ERROR
        }

        return sendJsonResponse({
          ...response,
          res,
          statusCode: 403
        });
      };

      req.user = user.username;
      next();
    });
  };