import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="mt-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="mb-10 mx-auto max-w-2xl font-Ovo text-center">
          I'm a skilled Full Stack Developer from Bengaluru, India, with over a
          year of experience building scalable web applications using React.js,
          Next.js, Node.js, TypeScript, and Tailwind CSS. I’m passionate about
          creating seamless and efficient digital solutions.
        </p>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              key={index}
              href="#work"
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
            >
              <a href={title === "Projects" ? "#work" : ""}>
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h4
          className="mt-8 mb-5 text-lg font-medium text-gray-700 font-Ovo dark:text-white"
          initial={{ opacity: 20, y: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Technologies & Tools in my workflow
        </motion.h4>
        <motion.ul
          className="flex flex-wrap items-center gap-3 sm:gap-5 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {toolsData.map(({ tool, name }, index) => (
            <div
              key={index}
              className=" flex flex-col  justify-center items-center gap-2"
            >
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7 " />
              </motion.li>
              <p className="text-sm">{name}</p>
            </div>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
