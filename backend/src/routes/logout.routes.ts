import { Request, Response } from "express";
import { ApiResponse } from "../../types";
import { GOOD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";

export const Logout = (req: Request, res: Response) => {
    res.clearCookie('token');
  
    const response: ApiResponse = {
      message: GOOD_SERVER_RESPONSE.LOGOUT_SUCESSFUL,
      user: req.user
    }
  
    return sendJsonResponse({
      ...response,
      res
    })
}
