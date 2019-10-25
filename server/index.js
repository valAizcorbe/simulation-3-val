require("dotenv").config();
const express = require("express");
const massive = require("massive");
// const session = require('ex')
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

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 60
//     }
//   })
// );

app.post("/auth/register", ctrl.register);
app.post("/auth/login", ctrl.login);
