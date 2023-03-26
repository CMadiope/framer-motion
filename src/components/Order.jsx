import React from "react";
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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  animation: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className='container text-center text-white/80'
      variants={containerVariants}
      initial='initial'
      animate='animation'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants} className=''>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants} className='py-6'>
        {pizza.toppings.map((topping) => (
          <div key={topping} className='py-2'>
            {topping}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
