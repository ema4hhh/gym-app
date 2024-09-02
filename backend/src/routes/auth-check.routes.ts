import { Request, Response } from "express";
import { ApiResponse } from "../../types"
import { GOOD_SERVER_RESPONSE } from "../enums"
import { sendJsonResponse } from "../helpers/responseHelpers"

export const AuthCheck = (req: Request, res: Response) => {
    const response: ApiResponse = {
      message: GOOD_SERVER_RESPONSE.TOKEN_VALID,
      user: req.user
    }
  
    return sendJsonResponse({
      ...response,      
      res
    })
}