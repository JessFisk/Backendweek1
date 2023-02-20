// console.log ("hello World")
const express = require("express");

const app = express();

app.use("/about", express.static("about"));
app.use("/books", express.static("books"));
app.use("/contactMe", express.static("contactMe"));
app.use("/cars", express.static("cars"));
app.use("/home", express.static("home"));

app.listen(5001, () => console.log("Server is listening on port 5001"));

