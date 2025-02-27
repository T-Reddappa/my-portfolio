import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const handleThemeChange = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="'" className="w-full -z-10" />
      </div>

      <nav
        className={` w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-3
      flex items-center justify-between z-50 ${
        isScrolling
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20 "
          : ""
      } `}
      >
        <a href="#top">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white/90">
            Reddy
            <span className="text-red-500">.</span>
          </div>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolling
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          {/* <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li> */}
          <li>
            <a href="#work" className="font-Ovo">
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 ">
          <button onClick={handleThemeChange}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10
            py-1.5 border border-gray-500 rounded-full ml-4 font-Ovo
            dark:border-white/50 "
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow-icon"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
              onClick={openMenu}
            />
          </button>

          {/* mobile menu */}
          <ul
            ref={sideMenuRef}
            className="md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 trasition duration-500 dark:bg-darkHover dark:text-white"
          >
            <div
              className="absolute right-6 top-6  cursor-pointer"
              onClick={closeMenu}
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="w-5"
              />
            </div>

            <li>
              <a href="#top" className="font-Ovo" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-Ovo" onClick={closeMenu}>
                About me
              </a>
            </li>
            {/* <li>
              <a href="#services" className="font-Ovo" onClick={closeMenu}>
                Services
              </a>
            </li> */}
            <li>
              <a href="#work" className="font-Ovo" onClick={closeMenu}>
                My Work
              </a>
            </li>
            <li>
              <a href="#contact" className="font-Ovo" onClick={closeMenu}>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
