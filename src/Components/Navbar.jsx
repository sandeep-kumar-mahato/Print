import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-[#ffe9c1] p-4 ${
        isOpen ? "fixed top-0 left-0 w-full h-full bg-[#ffe9c1] z-10" : ""
      }`}
    >
      <div className="container mx-auto lg:flex justify-between items-center">
        <div className="text-[#353229] text-lg font-bold">
          <Link to="/">PrintFusion</Link>
        </div>
        <div className="block lg:hidden absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#17110d] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:justify-between text-lg lg:text-sm mt-6 lg:m-auto lg:space-x-6 text-[#17110d]">
            <li>
              <Link to="/" className="block py-2 lg:py-0 hover:text-[#353229]">
                Miniature/Caricature
              </Link>
            </li>
            <li>
              <Link
                to="/pens"
                className="block py-2 lg:py-0 hover:text-[#353229]"
              >
                Pens
              </Link>
            </li>
            <li>
              <Link
                to="/corporate-gifts"
                className="block py-2 lg:py-0 hover:text-[#353229]"
              >
                Corporate Gifts
              </Link>
            </li>
            <li>
              <Link
                to="/notebooks"
                className="block py-2 lg:py-0 hover:text-[#353229]"
              >
                Notebooks
              </Link>
            </li>
            <li>
              <Link
                to="/sipper"
                className="block py-2 lg:py-0 hover:text-[#353229]"
              >
                Sipper
              </Link>
            </li>
            <li>
              <Link
                to="/bottles"
                className="block py-2 lg:py-0 hover:text-[#353229]"
              >
                Bottles
              </Link>
            </li>
            <li>
              <Link
                to="/led-lamps"
                className="block py-2 lg:py-0 hover:text-[#353229]"
              >
                LED Lamps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
