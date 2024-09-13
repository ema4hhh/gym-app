import type { WelcomeWorkout, Workout } from "./src/store/storeTypes"

export enum COMMERCIAL_KILOGRAM_PLATES {
  0=2.5,
  1=5,
  2=10,
  3=25,
}

export enum COMMERCIAL_POUND_PLATES {
  0=2.5,
  1=5,
  2=10,
  3=15,
  4=25,
  5=35,
  6=45,
}

export enum BAR_WEIGHT_KILOGRAM {
  EZ=5,
  TRICEP=5,
  OLYMPIC=20,
  HEX=25,
  SEMI_OLYMPIC=10,
  SHORT_STRAIGHT_BAR=5,
}

export enum DUMBBELL_KILOGRAM {
  0=2.5,
  1=5,
  2=10,
  3=15,
  4=20,
  5=25,
  6=30,
  7=35,
  8=40,
  9=45,
  10=50,
}

export type CommercialKilogramPlates = {
  2.5: number,
  5: number,
  10: number,
  25: number,
}

export type CommercialPoundPlates = {
  2.5: number,
  5: number,
  10: number,
  15: number,
  25: number,
  35: number,
  45: number,
}

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

export interface RoutinesWithNoWelcome {
  routines: Workout[]
}

export interface Routines {
  routines: (Workout | WelcomeWorkout)[]
}
