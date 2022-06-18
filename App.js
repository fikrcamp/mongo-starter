const express = require("express");

const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
