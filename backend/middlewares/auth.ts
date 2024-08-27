import { NextFunction, Request, Response } from "express";
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
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err: Error, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user.username;
      next();
    });
  };