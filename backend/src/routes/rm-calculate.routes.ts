import { Request, Response } from "express";
import { rm } from "../utils/rmCalculate";
import { ApiResponse } from "../../types";
import { BAD_SERVER_RESPONSE, GOOD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";

export const RmCalculate = (req: Request, res: Response) => {
    const { weight, reps } = req.body;
    
    if (weight === undefined || reps === undefined) {
      const response: ApiResponse = {
          message: BAD_SERVER_RESPONSE.RM_NO_VALUES,
          user: req.user
      }
      
      return sendJsonResponse({
          ...response,
          res,
      })
    }

    const oneRm = rm({weight, reps});

    const response: ApiResponse = {
        message: GOOD_SERVER_RESPONSE.RM_CALCULATED,
        user: req.user
    }

    return sendJsonResponse({
        ...response,
        res,
        data: oneRm
    })
}
