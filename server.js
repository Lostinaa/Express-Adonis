const path = require("path");
const express = require("express");

const app = express();

//static
app.use(express.static(path.join(__dirname, "public")));

app.listen(8001, () => console.log("server running"));
