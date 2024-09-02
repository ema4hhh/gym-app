import { VerifyErrors } from "jsonwebtoken";

const jwt = require('jsonwebtoken');

export async function signNewToken(username: string) {
    const newToken: string | undefined = await jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' })

    return newToken;
};
