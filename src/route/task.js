import express from "express";

import {
  SORT_FILM,
  GET_FILMS_BY_ID,
  GET_ALL_FILMS,
  DELETE_FILMS_BY_ID,
} from "../controller/task.js";

const router = express.Router();

// router.get("/GetResponse", GET_RESPONSE);

// router.get("/InsertFilmRecommendation", INSERT_FILM_RECOMMENDATION);

//router.get("/getAllFilmRecommendation", GET_ALL_FILM_RECOMMENDATION);

router.post("/SortFilm", SORT_FILM);

router.get("/getFilmsbyId", GET_FILMS_BY_ID);

router.get("/getAllFilms", GET_ALL_FILMS);

router.get("/films/:filmId", GET_FILMS_BY_ID);
router.delete("/films/:id", DELETE_FILMS_BY_ID);
router.get("/films/sort", SORT_FILM);

export default router;
