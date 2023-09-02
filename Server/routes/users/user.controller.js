const usersDatabase = require("../../models/users.model");
const users = require("../../data/users");

async function httpPostUsers(req, res) {
  await usersDatabase.deleteMany({});
  const importUser = await usersDatabase.insertMany(users);
  res.send({ importUser });
}

async function httpUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await usersDatabase.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
      createdAt: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
}

module.exports = {
  httpPostUsers,
  httpUserLogin,
};
