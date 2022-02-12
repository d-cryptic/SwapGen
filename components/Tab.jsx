import React from "react";

const Tab = () => {
  return (
    <div>
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700 flex flex-wrap justify-center ">
        <ul
          class="flex flex-wrap -mb-px"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist">
          <li class="mr-2" role="presentation">
            <button
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              id="Memes-tab"
              data-tabs-target="#Memes"
              type="button"
              role="tab"
              aria-controls="Memes"
              aria-selected="false">
              Memes
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active"
              id="Slang Words-tab"
              data-tabs-target="#Slang Words"
              type="button"
              role="tab"
              aria-controls="Slang Words"
              aria-selected="true">
              Slang Words
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              id="Emojis-tab"
              data-tabs-target="#Emojis"
              type="button"
              role="tab"
              aria-controls="Emojis"
              aria-selected="false">
              Emojis
            </button>
          </li>
          <li role="presentation">
            <button
              class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              id="Movies-tab"
              data-tabs-target="#Movies"
              type="button"
              role="tab"
              aria-controls="Movies"
              aria-selected="false">
              Movies
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="Memes"
          role="tabpanel"
          aria-labelledby="Memes-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Memes tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="Slang Words"
          role="tabpanel"
          aria-labelledby="Slang Words-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Slang Words tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="Emojis"
          role="tabpanel"
          aria-labelledby="Emojis-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Emojis tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="Movies"
          role="tabpanel"
          aria-labelledby="Movies-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Movies tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
