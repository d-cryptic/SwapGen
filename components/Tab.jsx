import React from "react";
import Abbreviation from "./Grids/Abbreviation";
import Emojis from "./Grids/Emoji";
import Memes from "./Grids/Memes";
import Movie from "./Grids/Movie";
import Filter from "./Filter";
import Trends from "./Grids/Trends";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="mx-10">
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
            role="tablist">
            <li className="-mb-px mr-2  last:mr-0 flex-auto text-center my-3">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-yellow-400"
                    : "text-black bg-blue-50")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                <i className="fas fa-space-shuttle text-base mr-1"></i> Memes
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-3">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-yellow-400"
                    : "text-black bg-blue-50")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                <i className="fas fa-cog text-base mr-1"></i> Emojis
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-3">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-yellow-400"
                    : "text-black bg-blue-50")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                <i className="fas fa-briefcase text-base mr-1"></i> Slang Words
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-3">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-black bg-yellow-400"
                    : "text-black bg-blue-50")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist">
                <i className="fas fa-briefcase text-base mr-1"></i> Web Series
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-3">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-black bg-yellow-400"
                    : "text-black bg-blue-50")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#linkt"
                role="tablist">
                <i className="fas fa-briefcase text-base mr-1"></i> Trends
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="font-bold">
                    Door of happiness
                    <br />
                  </p>
                  <Memes />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className="font-bold">
                    Start expressing yourself in a better way.
                    <br />
                  </p>
                  <Emojis />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p className="font-bold">
                    Long texts are boring these days....
                    <br />
                  </p>
                  <Abbreviation />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p className="font-bold">
                    A long time ago in a galaxy far, far away...
                    <br />
                  </p>
                  <Filter />
                  <Movie />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p className="font-bold">
                    Go with the flow
                    <br />
                  </p>
                  <Trends />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TabsRender() {
  return (
    <div>
      <Tabs color="pink" />
    </div>
  );
}
