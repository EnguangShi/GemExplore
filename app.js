const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Campground = require("./models/campground");

mongoose
  .connect("mongodb://127.0.0.1:27017/CampMark")
  .then(console.log("Database connected"))
  .catch((err) => {
    console.log("Connection error:");
    console.log(err);
  });

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/makecampground", async (req, res) => {
  const camp = new Campground({ title: "My Backyard", description: "cheap" });
  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
