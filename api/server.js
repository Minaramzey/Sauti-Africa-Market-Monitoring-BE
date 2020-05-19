const express = require("express");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth//auth-router");
const restricted = require("../auth/authenticator");

const server = express();

server.use(express.json());

server.use("/users", restricted, usersRouter);
server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "I SHALL PASS" });
});

module.exports = server;