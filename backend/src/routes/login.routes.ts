import { Request, Response } from "express";
import { users } from "../mocks/users";
import { ApiResponse } from "../../types";
import { BAD_SERVER_RESPONSE, GOOD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";
import { signNewToken } from "../utils/JWT";
const bcrypt = require('bcryptjs');

const compareEnciptedPasswords = async(password: string, realPassword: string) => await bcrypt.compare(password, realPassword)


export const Login = async(req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    const isValidPassword = await compareEnciptedPasswords(password, user?.password || "")
  
    if (!user || !isValidPassword) {
      const response: ApiResponse = {
        message: BAD_SERVER_RESPONSE.INVALID_CREDENTIALS
      }
  
      return sendJsonResponse({
        ...response,
        res,
        statusCode: 401
      });
    }
  
    req.user = username
  
    const token = await signNewToken(user.username);
  
    if (!token) {
      const response: ApiResponse = {
        message: BAD_SERVER_RESPONSE.TOKEN_SIGN_ERROR,
        user: req.user
      }
  
      return sendJsonResponse({
        ...response,
        res,
        statusCode: 500
      });
    }
  
    const response: ApiResponse = {
      token,
      message: GOOD_SERVER_RESPONSE.LOGIN_SUCESSFUL,
      user: req.user
    }
  
    return sendJsonResponse({
      ...response,
      res
    })
  }