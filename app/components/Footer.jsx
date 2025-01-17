import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white/90">
          Reddy
          <span className="text-red-500">.</span>
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          reddy3001@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Reddappa. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/T-Reddappa" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/reddappa-t-a872331b5"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/reddappa-t-a872331b5"
              target="_blank"
            >
              Twitter //Todo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
