import "../index.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // Scrolling down → hide navbar
        setShow(false);
      } else {
        // Scrolling up → show navbar
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <div style={{top: show ? "0" : "-90px", transition: "top 0.3s ease",}} className="navdiv sticky top-0 h-20 w-full bg-gray-800 flex items-center justify-between">
        <div className="logo size-text">
          <div
            className="mainlog size-12 bg-gray-950 border border-whitei text-white flex items-center justify-center ml-2 text-2xl font-bold rounded-md"
            style={{ fontFamily: "Pixelify sans" }}
          >
            Ca
          </div>
        </div>
        <p
          className="text-white tracking-[10px] text-2xl"
          style={{ fontFamily: "'Pixelify Sans', 'Rubik', sans-serif" }}
        >
          calcicode
        </p>
        <ul className="text-white flex space-x-4">
          <li
            style={{ fontFamily: "'Pixelify Sans', 'Rubik', sans-serif" }}
            className=""
          >
            Home
          </li>
          <li style={{ fontFamily: "'Pixelify Sans', 'Rubik', sans-serif" }}>
            Missions
          </li>
          <li
            style={{ fontFamily: "'Pixelify Sans', 'Rubik', sans-serif" }}
            className="pr-3"
          >
            Paths
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
