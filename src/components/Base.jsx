import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    x: "100vw ",
    opacity: 0,
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  },
};

const nextVariants = {
  initial: {
    x: "-100vw",
  },
  animation: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      animate='animation'
      exit='exit'
      className='container text-center text-white/70'
    >
      <h3 className='text-xl py-5'>Step 1: Choose Your Base</h3>
      <ul className='flex flex-col gap-3'>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              className='cursor-pointer'
              whileHover={{
                scale: 1.2,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className='py-10 ' variants={nextVariants}>
          <Link to='/toppings'>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className='border border-white/80 rounded-xl px-10 py-4'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
