const express = require('express');
const path = require('path');
const fs = require("fs");
const uniqid = require("uniqid");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoute");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);