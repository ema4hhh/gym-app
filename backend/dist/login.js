"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogingHandler = LogingHandler;
function LogingHandler(req, res) {
    res.send(`
    <h1>Login</h1>
    <form method="post" action="/process-login">
      <input type="text" name="username" placeholder="Username" /> <br>
      <input type="password" name="password" placeholder="Password" /> <br>
      <button type="submit">Login</button>
    </form>
  `);
    res.end();
}
