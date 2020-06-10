const express = require("express");
const app = express();
const cors = require("cors");
const data = {
  zadanie: "laborki",
  identyfikator: "1",
  adres: "cos.html",
  opis: "fajny plik",
  autor: "Robert Mehring",
};
app.use(cors());
app.get("/api/endpoint", (req, res) => {
  res.json(data);
});
app.listen(3000);
