import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tab from "../components/Tab";

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
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;700;900&display=swap"
            rel="stylesheet"></link>
        </Head>
      </div>
      <Navbar />
      <Tab />
      <Footer />
    </div>
  );
}
