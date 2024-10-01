import express from 'express';
const bodyParser = require('body-parser');
import dotenv from "dotenv";
import { authenticateToken } from "./src/middlewares/auth";
import { Login } from "./src/routes/login.routes";
import { Register } from "./src/routes/register.routes";
import { Logout } from "./src/routes/logout.routes";
import { AuthCheck } from "./src/routes/auth-check.routes";
import { RmCalculate } from "./src/routes/rm-calculate.routes";
import { Conversion } from './src/routes/conversion.routes';
const cors = require('cors')

declare global {
  namespace Express {
    interface Request {
      user: string;
    }
  }
}

const corsOptions = {
  credentials: true,      
}

dotenv.config();    
const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); 

app.post('/login', Login);       

app.post('/register', Register);

app.post('/logout', Logout);

app.get("/auth-check", authenticateToken, AuthCheck);

app.get("/rm-calculate", authenticateToken, RmCalculate);

app.get("/conversion", authenticateToken, Conversion)

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error: Error  ) => {
  throw new Error(error.message);
})
