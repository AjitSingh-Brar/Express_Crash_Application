const express = require("express");
const path = require("path");
const users = require("./users");
const moment = require("moment");

// app is getting initiliased
const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"public", "index.html"));
// });

// middleware function
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}:${
      req.originalUrl
    }:${moment().format()}`
  );
};

app.use(logger);

// accessing static folder
app.use(express.static(path.join(__dirname, "public")));

// Get All Users
app.get("/api/users", (req, res) => res.json(users));

// Get Single User
app.get("/api/users/:id", (req, res) => {
  let id = req.params.id;

  const foundUser = users.some((user) => user.id === parseInt(id));
  if (foundUser) {
    res.json(users.filter((user) => user.id === parseInt(id)));
  } else {
    res.status(404).send(`User with id: ${id} not found`);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
