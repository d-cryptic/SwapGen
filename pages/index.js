import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";
// import alanBtn from "@alan-ai/alan-sdk-web";
import dynamic from "next/dynamic";

export default function Home() {
  useEffect(() => {
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
      key: "ac1cdcabf16131c9aa1704feef0ff62a2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Tab />
      <Footer />
    </div>
  );
}
