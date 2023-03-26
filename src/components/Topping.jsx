import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Topping = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className='container text-center text-white/80'>
      <h3 className='text-xl py-4'>Step 2: Choose Toppings</h3>
      <ul className='flex flex-col gap-3'>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              className='cursor-pointer'
              whileHover={{
                scale: 1.2,
                color: "#f8e112",
              }}
              transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order' className='p-10'>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className='border border-white/80 rounded-xl px-10 py-4 mt-8'
        >
          Order
        </motion.button>
      </Link>
    </div>
  );
};

export default Topping;
