// import "flowbite";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import MovieCard from "../components/Movie/MovieCard";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
import Emoji from "./emoji";
import Memes from "./memes";
import Movie from "./movie";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tab />
      <Memes />
      <Emoji />
      <Movie />
      <Footer />
    </div>
  );
}
