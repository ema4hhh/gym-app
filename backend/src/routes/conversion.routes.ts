import { Request, Response } from "express";
import { ApiResponse } from "../../types";
import { BAD_SERVER_RESPONSE, GOOD_SERVER_RESPONSE } from "../enums";
import { lbToKg } from "../utils/lbToKg";
import { sendJsonResponse } from "../helpers/responseHelpers";
import { kgToLb } from "../utils/kgToLb";

export const Conversion = (req: Request, res: Response) => {
  const { weight, unit } = req.query
  const parsedWeight = parseInt(weight as string, 10)
  console.log(parsedWeight)
  
  if(isNaN(parsedWeight)) {
    const response: ApiResponse = {
      message: BAD_SERVER_RESPONSE.UNSUPORTED_WEIGHT_UNIT,
      user: req.user
    }
    
    return sendJsonResponse({
      ...response,
      res
    })
  }
  
  if (weight === undefined || unit === undefined) {
    const response: ApiResponse = {
      message: BAD_SERVER_RESPONSE.CONVERSION_NO_VALUES,
      user: req.user
    }
    
    return sendJsonResponse({
      ...response,
      res
    })
  }

  if (unit == "lb") {
    const convertedKg = lbToKg(parsedWeight)
    
    const response: ApiResponse = {
      message: GOOD_SERVER_RESPONSE.WEIGHT_CONVERTED,
      user: req.user,
      data: convertedKg
    }
    
    return sendJsonResponse({
      ...response,
      res
    })
  }
  
  if (unit == "kg") {
    const convertedLb = kgToLb(parsedWeight)
    
    const response: ApiResponse = {
      message: GOOD_SERVER_RESPONSE.WEIGHT_CONVERTED,
      user: req.user,
      data: convertedLb
    }
    
    return sendJsonResponse({
      ...response,
      res
    })
  }
  
  const response: ApiResponse = {
    message: BAD_SERVER_RESPONSE.UNSUPORTED_WEIGHT_UNIT,
    user: req.user
  }
  
  return sendJsonResponse({
    ...response,
    res
  })
}