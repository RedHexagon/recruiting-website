const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const cors = require("cors");
app.use(cors());
require("dotenv").config();

if (process.env.PROD) {
  app.use(express.static(path.join(__dirname, "./frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", async (req, res) => {
    res.send({
      message: "Recruiting website server is running",
    });
  });
}

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server listening on port ${port}`));
