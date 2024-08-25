import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { LogingHandler } from "./login";
const sessions = require('express-session')
const cors = require('cors')

declare module "express-session" {
  interface SessionData {
    userid: string;
  }
}

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors())

app.use(sessions({
  secret: 'gym secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
  },
  resave: true,
  saveUninitialized: false,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  if (!req.session.userid) {
    return res.redirect('/login');
  }

  res.send("Hello World")
})

app.get("/login", LogingHandler);

app.get("/logout", (req, res) => {
  req.session.destroy(() => {});
  res.redirect('/login');
})

app.post("/process-login", (req: Request, res: Response) => {
  if (req.body.username !== 'admin' || req.body.password !== 'admin') {
    res.send(`
      <h3>Invalid username or password</h3>
      <a href="/login" >Go back to login</a>
    `)
  }

  req.session.userid = req.body.username;

  res.redirect('/');
})

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
})
