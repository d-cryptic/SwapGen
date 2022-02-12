import React, { useState } from "react";
import MovieCard from "../Movie/MovieCard";
import MovieDatas from "../Movie/movieData";

const Movie = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      {MovieDatas.map((movie) => {
        return (
          <MovieCard
            image={movie.posterURL}
            title={movie.title}
            IMDB={movie.IMDBRating}
            summary={movie.summary}
            genre={movie.genre}
          />
        );
      })}
    </div>
  );
};

const movie = () => {
  // console.log(movieData);
  return (
    <>
      <Movie />
    </>
  );
};

export default movie;
