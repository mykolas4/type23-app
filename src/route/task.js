const express = require("express");

const {
  GET_RESPONSE,
  INSERT_FILM_RECOMMENDATION,
  GET_ALL_FILM_RECOMMENDATION,
  SORT_FILM,
  GET_FILMS_BY_ID,
  GET_ALL_FILMS,
} = require("../controller/task");

const router = express.Router();

router.get("/GetResponse", GET_RESPONSE);

router.get("/InsertFilmRecommendation", INSERT_FILM_RECOMMENDATION);

router.get("/getAllFilmRecommendation", GET_ALL_FILM_RECOMMENDATION);

router.post("/SortFilm", SORT_FILM);

router.get("/getFilmsbyId", GET_FILMS_BY_ID);

router.get("/getAllFilms", GET_ALL_FILMS);

module.exports = router;
