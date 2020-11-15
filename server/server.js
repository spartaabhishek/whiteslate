const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require("cors");

const server = http.createServer(app);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/images", (req, res) => {
  const filenames = {};
  fs.readdirSync("public/uploads").forEach((file) => {
    const category = file.split("_")[0];
    if (filenames.hasOwnProperty(category)) {
      filenames[category].push(file);
    } else {
      filenames[category] = [];
      filenames[category].push(file);
    }
  });
  res.send(filenames);
});

app.get("/image/:id", (req, res) => {
  const { id } = req.params;
  res.sendFile(path.join(__dirname, "public", "uploads", id));
});
server.listen(3000);
