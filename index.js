const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"public", "index.html"));
// });

app.use(express.static(path.join(__dirname, "public")));


app.get("/menu/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);	
    res.send(`Menu with ID: ${id}`);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
