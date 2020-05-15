const express = require("express");

const usersRouter = require("../users/users-router");
// const authRouter = require("../auth//auth-router");
// const restricted = require("../auth/authenticator");

const server = express();

server.use(express.json());

server.use("/api/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "I SHALL PASS" });
});

module.exports = server;