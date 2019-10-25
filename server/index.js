require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const ctrl = require("./controller");
const app = express();
const port = SERVER_PORT;
app.use(express.json());
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("DB connected");
    app.listen(port, () => {
      console.log("Server listening on :", { port });
    });
  })
  .catch(err => console.log(err));
