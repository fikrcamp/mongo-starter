const express = require("express");
const userController = require("../Controllers/userControllers");
const router = express.Router();

router.route("/").get(userController.getUsers);

router.route("/login").post(userController.signIn);
router.route("/signup").post(userController.signUp);

router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.editUser)
  .delete(userController.deleteUser);

module.exports = router;
