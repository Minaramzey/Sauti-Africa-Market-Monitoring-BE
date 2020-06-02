const express = require("express");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth//auth-router");
const dataRouter = require("../data/data-router")
const restricted = require("../auth/authenticator");

const pdfTemplate = require('./documents');

const server = express();
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require("cors");
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(express.json());

server.use("/users", restricted, usersRouter);
server.use("/data", restricted, dataRouter)
server.use("/auth", authRouter);

// POST - PDF generation and fetching all the data
server.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if(err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});

// GET -  Send the generated PDF to the client
server.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
});


server.get("/", (req, res) => {
  res.json({ api: "I SHALL PASS" });
});



module.exports = server;