import { Request, Response } from "express";
import { rm } from "../utils/rmCalculate";
import { ApiResponse } from "../../types";
import { GOOD_SERVER_RESPONSE } from "../enums";
import { sendJsonResponse } from "../helpers/responseHelpers";

export const rmCalculate = (req: Request, res: Response) => {
    const { weight, reps } = req.body;

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
