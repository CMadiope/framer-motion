import React from "react";
import { Link } from "react-router-dom";

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
            <li
              key={topping}
              onClick={() => addTopping(topping)}
              className='cursor-pointer'
            >
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to='/order' className='p-10'>
        <button className='border border-white/80 rounded-xl px-10 py-4 mt-8'>
          Order
        </button>
      </Link>
    </div>
  );
};

export default Topping;
