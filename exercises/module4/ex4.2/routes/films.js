var express = require('express');
var router = express.Router();

const LISTE_FILMS = [
  {
    id: 1,
    title: 'La ligne verte',
    duration : 120 ,
    budget : 30,
    link : 'https://www.allocine.fr/film/fichefilm_gen_cfilm=22779.html',
  },
  {
    id: 2,
    title: 'Forrest Gump',
    duration : 140 ,
    budget : 50,
    link : 'https://www.allocine.fr/film/fichefilm_gen_cfilm=10568.html',
  },
  {
    id: 3,
    title: 'Django Unchained',
    duration : 130 ,
    budget : 100,
    link : 'https://www.allocine.fr/film/fichefilm_gen_cfilm=190918.html',
  },
  {
    id: 4,
    title: 'Avengers : Endgame',
    duration : 150 ,
    budget : 300,
    link : 'https://www.allocine.fr/video/player_gen_cmedia=19583315&cfilm=232669.html',
  },
  {
    id: 5,
    title: 'Retour vers le futur',
    duration : 110 ,
    budget : 20,
    link : 'https://www.allocine.fr/video/player_gen_cmedia=19427701&cfilm=448.html',
  },
];

//lecture tous les films
/*

router.get('/', (req,res,next) =>{
  return res.json(LISTE_FILMS);
})

*/

// lecture filtré avec minimum duration
router.get('/',  (req,res) => {
  const minDuration = parseInt(req.query['minimum-duration'],10);
  // parseInt converti un string en int

  // dans la soluce ça : 
  /*
    const minimumFilmDuration = req?.query
    ? parseInt(req.query['minimum-duration'])
    : undefined;

    req? verifie si la requete est nulle
    le ? au milieu c'est un if, si null renvoie undefined sinon la condition
    de droite 
  */
  let filtredFilms;
    if (
    minDuration &&
    (typeof minDuration !== 'number' || minDuration <= 0)
  ) return res.sendStatus(400);

  if(!minDuration) return res.json(LISTE_FILMS);

  if(minDuration){
    filtredFilms = LISTE_FILMS.filter((film) => {
      return film.duration >= minDuration

      // si je met une acolade {} je dois toujours 
      // retourner quelque chose via return 
    });
    return res.json(filtredFilms);
  }
  

})

//lecture d'un film avec un id
router.get('/:id',(req,res) => {
 const indexOfFilmFound = LISTE_FILMS.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  return res.json(LISTE_FILMS[indexOfFilmFound]);

});


// ajouter un film
router.post('/add', (req,res)=> {
  
})



module.exports = router;
