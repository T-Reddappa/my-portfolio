import Image from "next/image";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  const mailtoLink =
    "mailto:reddy3001@gmail.com?subject=Hello&body=Hi, I wanted to reach out about...";

  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white/90">
          Reddy
          <span className="text-red-500">.</span>
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <a
            href={mailtoLink}
            className="w-max flex items-center gap-2 mx-auto"
          >
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="mail"
              className="w-6"
            />
            reddappa3001@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Reddappa. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/T-Reddappa"
              className="flex items-center gap-2"
              target="_blank"
            >
              <GitHubIcon />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/reddappa-t-a872331b5"
              className="flex items-center gap-2"
              target="_blank"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Reddy_3001"
              className="flex items-center gap-2"
              target="_blank"
            >
              <XIcon fontSize="small" />
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
