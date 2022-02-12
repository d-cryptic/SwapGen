import React from "react";

const Filter = () => {
  return (
    <div className="my-10 justify-center flex flex-wra">
      <div class="sm:items-center sm:flex sm:justify-between">
        <form action="" class="flex mt-2 sm:mt-0">
          <div>
            <label for="FilterBy" class="sr-only">
              Filter
            </label>

            <select
              id="FilterBy"
              name="filter_by"
              class="text-sm border-black-100 rounded">
              <option readonly>Filter</option>
              <option value="health">Health</option>
              <option value="fitness">Fitness</option>
              <option value="eating">Eating</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
