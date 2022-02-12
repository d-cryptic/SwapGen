import React, { useState } from "react";
import Movie from "./Grids/Movie";
import MovieDatas from "./Movie/movieData";

const Filter = () => {
  const [genre, setGenre] = useState("All");

  // const handleChange = (e) => {
  //   setGenre(e.target.value);
  //   switch (e.target.value) {
  //     case "All":
  //       <Movie movieData={MovieDatas} />;
  //     case "Action":
  //       <Movie
  //         movieData={MovieDatas.filter((movie) => movie.genre === "Action")}
  //       />;

  //     case "Comedy":
  //       <Movie
  //         movieData={MovieDatas.filter((movie) => movie.genre === "Comedy")}
  //       />;
  //     case "Drama":
  //       <Movie
  //         movieData={MovieDatas.filter((movie) => movie.genre === "Drama")}
  //       />;
  //     case "Horror":
  //       <Movie
  //         movieData={MovieDatas.filtser((movie) => movie.genre === "Horror")}
  //       />;
  //     case "Romance":
  //       <Movie
  //         movieData={MovieDatas.filter((movie) => movie.genre === "Romance")}
  //       />;
  //   }
  // };

  return (
    <div className="my-10 justify-center flex flex-wra">
      <div className="sm:items-center sm:flex sm:justify-between">
        <form action="" className="flex mt-2 sm:mt-0">
          <div>
            <label for="FilterBy" className="sr-only">
              Filter
            </label>
            <select
              id="FilterBy"
              name="filter_by"
              className="text-sm border-black-100 rounded"
              // onChange={ handleChange }
            >
              <option readOnly>All</option>
              <option value="drama">Drama</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
