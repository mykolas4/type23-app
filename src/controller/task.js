const { v4: uuidv4 } = require("uuid");

const films = [];

module.exports.GET_RESPONSE = (req, res) => {
    res.json({ response: "heyoooo" });
  }

  module.exports.INSERT_FILM_RECOMMENDATION = (req, res) => {
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
  }

  module.exports.GET_ALL_FILM_RECOMMENDATION = (req, res) => {
  }
    try {
      return res.status(200).json({ films: films });
    } catch (error) {
      return res.status(500).json({ error: "Error" });
    }

module.exports.SORT_FILM = (req, res) => {}
    try {
      const sortedFilms = [...films].sort((a, b) => a.rating - b.rating);
      return res.status(200).json({ films: sortedFilms });
    } catch (error) {
      return res.status(500).json({ error: "Error" });
    }

    module.exports.GET_FILMS_BY_ID = (req, res) => {
        const film = films.find((t) => t.id === req.params.filmId);
      
        if (!film) {
          return res.status(404).json({ message: "Film does not exist" });
        }
      
        return res.status(200).json({ film: film });
      };
      
      app.use(req, res) => {
        res.status(404).json({ response: "Your endpoint does not exist" });

      }

      module.exports.GET_ALL_FILMS = (req, res) => {
        const films = req.body.films; 
        
        if (films && films.length > 0) {
          const sortedFilms = [...films].sort((a, b) => b.points - a.points);
          return res.status(200).json({ films: sortedFilms });
        }
        
        return res.status(200).json({ message: "No films" });
      };


      