"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const login_1 = require("./login");
const sessions = require('express-session');
const cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(cors());
app.use(sessions({
    secret: 'gym secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    resave: true,
    saveUninitialized: false,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    if (!req.session.userid) {
        return res.redirect('/login');
    }
    res.send("Hello World");
});
app.get("/login", login_1.LogingHandler);
app.get("/logout", (req, res) => {
    req.session.destroy(() => { });
    res.redirect('/login');
});
app.post("/process-login", (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== 'admin') {
        res.send(`
      <h3>Invalid username or password</h3>
      <a href="/login" >Go back to login</a>
    `);
    }
    req.session.userid = req.body.username;
    res.redirect('/');
});
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
