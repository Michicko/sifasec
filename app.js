const express = require("express");
const app = express();
const path = require("node:path");
const cors = require("cors");

app.use(cors());

app.use(express.static(path.join(__dirname + "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

const port = process.env.PORT || 8001;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
