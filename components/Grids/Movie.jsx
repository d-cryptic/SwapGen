import React from "react";
import MovieCard from "../Movie/MovieCard";

const movie = ({ movieData }) => {
  console.log(movieData);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 my-10">
      {movieData.map((movie) => {
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

export default movie;
