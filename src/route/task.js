import express from "express";

import {
  SORT_FILM,
  GET_FILMS_BY_ID,
  GET_ALL_FILMS,
  DELETE_FILMS_BY_ID,
  UPDATE_FILMS_BY_ID,
} from "../controller/task.js";

const router = express.Router();

router.get("/films/sort", SORT_FILM);
router.get("/films/:id", GET_FILMS_BY_ID);
router.get("/films/", GET_ALL_FILMS);
router.delete("/films/:id", DELETE_FILMS_BY_ID);
router.put("/films/:id", UPDATE_FILMS_BY_ID);


export default router;


