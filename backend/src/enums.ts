export enum BAD_SERVER_RESPONSE {
    INVALID_CREDENTIALS="Invalid credentials",
    ALREADY_EXISTING_USER="User Already exist",
    USER_NOT_LOGGED="User is not logged",
    TOKEN_VERIFY_ERROR="The token has exipred or doesn't exist",
    TOKEN_SIGN_ERROR="Something went wrong Signing the token, please contact me: ema4hhh@gmail.com",
    LOGOUT_ERROR="Something went wrong, please contact me if cannot logout: ema4hhh@gmail.com"
}

export enum GOOD_SERVER_RESPONSE {
    LOGIN_SUCESSFUL="Login sucessful",
    REGISTER_SUCESSFUL="Register sucessful",
    LOGOUT_SUCESSFUL="Logout sucessful",
    TOKEN_VALID="Token is valid"
}
