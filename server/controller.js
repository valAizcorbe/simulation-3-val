const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    let user = await db.check_user(username);
    const existingUser = user[0];
    if (existingUser) {
      res.status(409).send("Username already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    let newUser = await db.register({
      username,
      password: hash
    });
    newUser = newUser[0];
    let userProfile = await db.create_account(newUser.id);
    userProfile = userProfile[0].posts;
    req.session.result = { ...newUser, userProfile };
    res.status(201).send(req.session.result);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    let foundUser = await db.check_user(username);
    foundUser = foundUser[0];
    if (!foundUser) {
      res.status(401).send("User does not exist");
    }
    let authenticated = bcrypt.compareSync(password, foundUser.password);
    if (authenticated) {
      delete foundUser.password;
      req.session.user = foundUser;
      res.status(202).send(req.session.user);
    } else {
      res.status(401).send("Password is incorrect");
    }
  }
};
