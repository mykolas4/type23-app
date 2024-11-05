const { v1: uuidv1, v4: uuidv4 } = require("uuid");

uuidv1();
uuidv4();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(3000);

app.post("/GetResponse");

app.post("/InsertFilmRecommendation");

app.get("/getAllFilmRecommendation");

app.get("/SortFilm");

app.get("/getFilmsbyId/:filmId");

app.get("/getAllFilms");

//CAO
app.get("/cars/:model", (req, res) => {
  console.log(req.params.model);
  res.send("OK");
});
