import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className=''
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2 className='text-center font-bold text-xl py-6 text-white/80'>
        Welcome to Pizza Joint
      </h2>
      <Link to='/base' className='flex justify-center'>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
          className='text-white py-[10px] px-[30px] rounded-[50px] border-2 border-white cursor-pointer opacity-[0.7]'
        >
          Create You Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
