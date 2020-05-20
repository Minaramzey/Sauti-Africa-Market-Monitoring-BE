const express = require("express");
const server = express();
// const usersRouter = require("../users/users-router");
// const authRouter = require("../auth//auth-router");
// const restricted = require("../auth/authenticator");

const expressGraphQL = require('express-graphql');
const schema = require('../graphql_schema/schema');

server.use(express.json());

server.use('/users', expressGraphQL({
  schema: schema,
  graphiql: true
}));


// server.use("/users", restricted, usersRouter);
// server.use("/auth", authRouter);

// server.get("/", (req, res) => {
//   res.json({ api: "I SHALL PASS" });
// });

module.exports = server;