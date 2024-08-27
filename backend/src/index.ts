const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
import dotenv from "dotenv";
import { Request, Response } from "express";
import { authenticateToken } from "../middlewares/auth";
const cors = require('cors')

const users = [{username: "admin", password: "$2a$10$szuMmHLlhxVhsW5fgCEtku0ts5PqLn3kJe1h1EVZ92lp8z1HFEHGa"}]

const corsOptions = {
  credentials: true,      
}

dotenv.config();    
const app = express();
const PORT = process.env.PORT;

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); 

app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Crea un token JWT
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, message: 'Login successful'  });
});       

app.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Verifica si el usuario ya existe
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Encripta la contraseña antes de guardarla
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.json({ message: 'User registered successfully' });
});

app.post('/logout', (req: Request, res: Response) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});

app.get("/auth-check", authenticateToken, (req: Request, res: Response) => {
  res.json({ message: "Token is valid", user: req.user });
})

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error: Error  ) => {
  // gracefully handle error
  throw new Error(error.message);
})
