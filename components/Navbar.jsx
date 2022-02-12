import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-center items-center mx-auto my-3">
        <a href="#" className="flex">
          <Image src={logo} alt="logo" width={75} height={75} />
          <span className="self-center mx-5 font-black text-3xl whitespace-nowrap dark:text-white">
            SwapGen
          </span>
        </a>
      </div>
    </nav>
  );
};
export default Nav;
