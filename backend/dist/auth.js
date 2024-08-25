"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
function authMiddleware(req, res, next) {
    if (req.body.username === "admin" && req.body.password === "admin") {
        req.session.userid = req.body.username;
        return next();
    }
    else {
        console.log("wrong");
        return res.status(401).send('Invalid credentials.');
    }
}
