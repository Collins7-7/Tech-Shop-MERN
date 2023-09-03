const usersDatabase = require("../../models/users.model");
const users = require("../../data/users");
const { generateToken } = require("../../utils/generateToken");

async function httpPostUsers(req, res) {
  await usersDatabase.deleteMany({});
  const importUser = await usersDatabase.insertMany(users);
  res.send({ importUser });
}

//LOGIN
async function httpUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await usersDatabase.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      createdAt: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
}

//REGISTER

async function httpRegisterUser(req, res) {
  const { name, email, password } = req.body;
  const userExists = await usersDatabase.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await usersDatabase.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      createdAt: user.createdAt,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user credentials");
  }
}

//PROFILE
async function httpUserProfile(req, res) {
  console.log(req.user);
  const user = await usersDatabase.findById(req.user.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      createdAt: user.createdAt,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
}

module.exports = {
  httpPostUsers,
  httpUserLogin,
  httpUserProfile,
  httpRegisterUser,
};
