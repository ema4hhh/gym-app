import { Request, Response } from "express";
import { rm } from "../utils/rmCalculate";
import { ApiResponse } from "../../types";
import { BAD_SERVER_RESPONSE, GOOD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";

const rmPercentages = [
  {"1":100},
  {"2":95},
  {"3":92.5},
  {"4":90},
  {"5":87.5},
  {"6":85},
  {"7":82.5},
  {"8":80},
  {"9":77.5},
  {"10":75}
]

export const SuggestWeight = (req: Request, res: Response) => {
    const { weight, reps, targetReps } = req.query;
    const parsedTargetReps = parseInt(targetReps as string, 10)
    const parsedWeight = parseInt(weight as string, 10)
    const parsedReps = parseInt(reps as string, 10)
    const rmPercentage = rmPercentages.find((rm) => {
      const reps = parseInt(Object.keys(rm)[0], 10)
      return reps === parsedTargetReps
    })
    
    if (rmPercentage === undefined) {
      const response: ApiResponse = {
          message: BAD_SERVER_RESPONSE.INVALID_RM_PERCENTAGE,
          user: req.user
      }
      
      return sendJsonResponse({
          ...response,
          res,
      })
    }

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
    
    if (isNaN(parsedTargetReps)) {
      const response: ApiResponse = {
          message: BAD_SERVER_RESPONSE.TARGET_REPS_NOT_A_NUMBER,
          user: req.user
      }
      
      return sendJsonResponse({
          ...response,
          res,
      })
    }

    const oneRm = rm({weight: parsedWeight, reps: parsedReps});
    
    const suggestWeight = oneRm*(Object.values(rmPercentage)[0]/100)

    const response: ApiResponse = {
        message: GOOD_SERVER_RESPONSE.RM_CALCULATED,
        user: req.user
    }

    return sendJsonResponse({
        ...response,
        res,
        data: suggestWeight
    })
}
