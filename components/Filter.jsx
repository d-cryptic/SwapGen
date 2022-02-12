import React, { useState } from "react";
import Movie from "./Grids/Movie";
import MovieDatas from "./Movie/movieData";

const Filter = () => {
  const [genre, setGenre] = useState("All");

  const handleChange = (e) => {
    setGenre(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-10 justify-center flex flex-wra">
      <div class="sm:items-center sm:flex sm:justify-between">
        <form action="" class="flex mt-2 sm:mt-0 onSubmit={handleSubmit}">
          <div>
            <label for="FilterBy" class="sr-only">
              Filter
            </label>
            <select
              id="FilterBy"
              name="filter_by"
              class="text-sm border-black-100 rounded"
              onChange={handleChange}>
              <option readonly>All</option>
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
