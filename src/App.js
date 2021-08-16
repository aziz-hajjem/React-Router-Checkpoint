import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MovieList from './Component/MovieList';
import FilmDetail from './Component/FilmDetail';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [movieList, setMovieList] = useState([{
    id: uuidv4(),
    title: "Agent",
    description: "Un groupe d'amis se rend dans le désert pour s'exercer aux maniements des armes et libère accidentellement un pouvoir si grand qu'il les submerge. Il leur faut choisir entre leurs proches et le sort de l'humanité.",
    posterURL: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/169241483/original/af413b406d3cb2eedc149baf2a8b87156d86d56f/make-your-movie-or-short-film-poster.jpg",
    rating: 5,
    embedId:"0DjvH6S6eGo"
},

{
    id: uuidv4(),
    title: "Joker",
    description: "Joker est un thriller psychologique américain, coécrit et réalisé par Todd Phillips, sorti en 2019. ... Il raconte, dans une histoire originale, la transformation d'Arthur Fleck en Joker, un dangereux tueur psychopathe qui deviendra, par la suite, le plus grand ennemi de Batman.",
    posterURL: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    rating: 6,
    embedId:"zAGVQLHvwOY"
    
},
{
  id: uuidv4(),
  title: "Survive",
  description: "Dans un monde post-apocalyptique proche du futur, un père doit traverser un paysage dangereux pour retrouver sa femme et sa fille",
  posterURL: "https://m.media-amazon.com/images/M/MV5BOTIzMDhlZDAtZWE1OS00OGI0LWE5MjQtZmMwNGY5NTRhMGFhXkEyXkFqcGdeQXVyMTExNTk5Nzk4._V1_.jpg",
  rating: 9,
  embedId:"JntJAic4i-k"
  
},
]);

  


  return (

    <>
      <Switch>
        <Route path="/" exact >
          <MovieList movieList={movieList} newList={(movie=>setMovieList(movie))} ></MovieList>
        </Route>
        <Route path="/:name/:id" >
          <FilmDetail movies={movieList}></FilmDetail>
        </Route>
      </Switch>

    </>
  );
}

export default App;
