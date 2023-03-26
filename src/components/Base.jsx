import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className='container text-center text-white/70'>
      <h3 className='text-xl py-5'>Step 1: Choose Your Base</h3>
      <ul className='flex flex-col gap-3'>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)} className='cursor-pointer'>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className='py-10 '>
          <Link to='/toppings'>
            <button className='border border-white/80 rounded-xl px-10 py-4'>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;