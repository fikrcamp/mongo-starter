exports.signUp = (req, res) => {
  res.status(200).json({ message: "signed up" });
};
exports.signIn = (req, res) => {
  res.status(200).json({ message: "signed in" });
};

exports.getUsers = (req, res) => {
  res.status(200).json({ message: "all users" });
};

exports.getUser = (req, res) => {
  res.status(200).json({ message: "one user" });
};

exports.editUser = (req, res) => {
  res.status(200).json({ message: "Edit User" });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({ message: "delete user" });
};
