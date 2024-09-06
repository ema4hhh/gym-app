import { NextFunction, Request, Response } from "express";
import { BAD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";
import { ApiResponse } from "../../types";
import { verifyToken } from "../utils/JWT";

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

    const { error, username } = verifyToken(token)

    if (error) {
      const response: ApiResponse = {
        message: BAD_SERVER_RESPONSE.TOKEN_VERIFY_ERROR
      }

      return sendJsonResponse({
        ...response,
        res,
        statusCode: 403
      });
    }

    req.user = username || "guest"; 
    next();
  };