import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Reddy
        <motion.div
          animate={{
            rotate: [0, 20, -10, 10, 0], // Rotate back and forth
          }}
          transition={{
            delay: 1,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="inline-block"
          style={{
            transformOrigin: "center", // Ensure rotation happens from the center
          }}
        >
          <Image src={assets.hand_icon} alt="hand-icon" className="w-6 h-6" />
        </motion.div>
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer based in Bengaluru
        <span className="text-red-500">.</span>
      </motion.h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-3 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4 mt-1" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white/90 dark:text-black"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
