module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get("db");
    db.get_posts()
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
