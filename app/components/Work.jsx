import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

import GitHubIcon from "@mui/icons-material/GitHub";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initia={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-8 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Protfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        These projects showcase my expertise in building functional and
        user-focused web applications. With technologies like WebSockets for
        real-time updates and Razorpay for payment integration.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-auto my-10 gap-5"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square rounded-lg relative group border border-gray-400  overflow-hidden hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white
            p-5 "
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="w-full h-3/5 relative overflow-hidden"
            >
              <div
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>

            {/* <div
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="w-full h-3/5 object-cover bg-cover bg-center "
            ></div> */}

            <a
              className="absolute w-full bottom-0 background font-Ovo duration-500 group-hover:bottom-3"
              href={project.liveLink}
              target="_blank"
            >
              <h3 className="font-Ovo text-2xl">{project.title}</h3>
              <p className="text-sm">{project.description}</p>

              <div className="text-center block mb-4 pr-8">
                Visit Site <DashboardIcon fontSize="small" />
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        href="https://github.com/T-Reddappa"
        target="_blank"
        className="w-max flex items-center justify-center gap-4 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more <GitHubIcon />
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right-arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
