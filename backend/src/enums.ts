export enum BAD_SERVER_RESPONSE {
    INVALID_CREDENTIALS="Invalid credentials",
    ALREADY_EXISTING_USER="User Already exist",
    USER_NOT_LOGGED="User is not logged",
    TOKEN_VERIFY_ERROR="The token has exipred or doesn't exist",
    TOKEN_SIGN_ERROR="Something went wrong Signing the token, please contact me: ema4hhh@gmail.com",
    LOGOUT_ERROR="Something went wrong, please contact me if cannot logout: ema4hhh@gmail.com",
    RM_NO_VALUES="Weight or repetitions is missing",
    SUGGEST_NO_VALUES="Weight or repetitions is missing",
    CONVERSION_NO_VALUES="Weight or unit is missing",
    UNSUPORTED_WEIGHT_UNIT="The weight unit used is not supported or was bad spelled",
    TARGET_REPS_NOT_A_NUMBER="The targered reps is not a number",
    INVALID_RM_PERCENTAGE="We only suggest weight in a range of 1-10"
}

export enum GOOD_SERVER_RESPONSE {
    LOGIN_SUCESSFUL="Login sucessful",
    REGISTER_SUCESSFUL="Register sucessful",
    LOGOUT_SUCESSFUL="Logout sucessful",
    TOKEN_VALID="Token is valid",
    RM_CALCULATED="RM calculated sucessful",
    WEIGHT_CONVERTED="Weight converted",
    SUGGEST_WEIGHT="Suggested weight calculated"
}
