let films = [];

import { v4 as uuidv4 } from "uuid";

const GET_RESPONSE = (req, res) => {
  res.json({ response: "heyoooo" });
};

const INSERT_FILM_RECOMMENDATION = (req, res) => {
  const { id, title, rating, description, iMDBlink } = req.body;

  const film = {
    id,
    title,
    rating: parseFloat(rating),
    description,
    iMDBlink,
    status: false,
    date: new Date(),
  };

  films.push(film);

  return res
    .status(201)
    .json({ response: "task was inserted succesfully", film: films });
};

const GET_ALL_FILM_RECOMMENDATION = (req, res) => {
  try {
    return res.status(200).json({ films });
  } catch {
    return res.status(500).json({ error: "error in fetching films" });
  }
};

const SORT_FILM = (req, res) => {
  try {
    const sortedFilms = [...films].sort((a, b) => a.rating - b.rating);
    return res.status(200).json({ films: sortedFilms });
  } catch {
    return res.status(500).json({ error: "error" });
  }
};
const GET_FILMS_BY_ID = (req, res) => {
  const film = films.find((t) => t.id === req.params.filmId);

  if (!film) {
    return res.status(404).json({ message: "film does not exist" });
  }

  return res.status(200).json({ film: film });
};

const GET_ALL_FILMS = (req, res) => {
  const films = req.body.films;

  if (films && films.length > 0) {
    const sortedFilms = [...films].sort((a, b) => b.points - a.points);
    return res.status(200).json({ films: sortedFilms });
  }

  return res.status(200).json({ message: "no films" });
};

const DELETE_FILMS_BY_ID = (req, res) => {
  const filmId = req.params.id;

  const film = films.find((t) => t.id === filmId);

  if (!film) {
    return res
      .status(404)
      .json({ response: `film with ID ${filmId} does not exist` });
  }

  films = films.filter((t) => t.id !== filmId);

  return res.status(200).json({ response: "film was deleted" });
};

export {
  GET_RESPONSE,
  INSERT_FILM_RECOMMENDATION,
  GET_ALL_FILM_RECOMMENDATION,
  SORT_FILM,
  GET_FILMS_BY_ID,
  GET_ALL_FILMS,
  DELETE_FILMS_BY_ID,
};
