import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex items-center justify-center md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com" className="hover:underline" target="#">
          GenZ™
        </a>
        . All Rights Reserved. Built with ❤️ by <a href="">Barun</a>,{" "}
        <a href="">Gungun</a>, <a href="">Madhur</a>, and <a href="">Sunaina</a>
        .
      </span>
    </footer>
  );
};

export default Footer;
