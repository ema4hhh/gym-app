import { Request, Response } from "express";
import { users } from "../mocks/users";
import { BAD_SERVER_RESPONSE, GOOD_SERVER_RESPONSE } from "../enums";
import { ApiResponse } from "../../types";
import { sendJsonResponse } from "../helpers/responseHelpers";
const bcrypt = require('bcryptjs');

export const Register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    if (users.find(user => user.username === username)) {
      const response: ApiResponse = {
        message: BAD_SERVER_RESPONSE.ALREADY_EXISTING_USER
      }
  
      return sendJsonResponse({
        ...response,
        res,
        statusCode: 500
      });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    console.log(users[users.length-1]);
  
    req.user = username
  
    const response: ApiResponse = {
      message: GOOD_SERVER_RESPONSE.REGISTER_SUCESSFUL,
      user: req.user
    }
  
    return sendJsonResponse({
      ...response,
      res,
      statusCode: 201
    })
  }