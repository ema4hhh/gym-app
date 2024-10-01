import { VerifyErrors } from "jsonwebtoken";

const jwt = require('jsonwebtoken');

export async function signNewToken(username: string) {
    const newToken: string | undefined = await jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' })

    return newToken;
};

export const verifyToken = (token: string) => {
    const jwtSecret = process.env.JWT_SECRET || "gym-app-secret";
    let username = "guest";
    let error = false;

    jwt.verify(token, jwtSecret, (err: VerifyErrors, user: {  username: string | undefined  }) => {
      if (err) {
        error = true;
      };      
      
      username = user.username || "guest";
    });

    if (error) {
      return {
        error: true,
        username
      }
    }

    return {
      error: false,
      username
    }
  }
