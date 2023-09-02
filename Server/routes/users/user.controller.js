const usersDatabase = require("../../models/users.model");
const users = require("../../data/users");

async function httpPostUsers(req, res) {
  await usersDatabase.deleteMany({});
  const importUser = await usersDatabase.insertMany(users);
  res.send({ importUser });
}

module.exports = {
  httpPostUsers,
};
