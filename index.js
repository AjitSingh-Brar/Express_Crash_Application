const express = require("express");
const path = require("path");
const users = require("./Users");

const app = express();
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5000;


//Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Init middleware
// app.use(logger);

app.use("/api/users", require("./routes/api/users"));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
