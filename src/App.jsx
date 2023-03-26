import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Base from "./components/Base";
import Home from "./components/Home";
import Order from "./components/Order";
import Topping from "./components/Topping";
import Header from "./components/Header";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  const addTopping = ({ topping }) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item != topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/base'
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path='/toppings'
            element={<Topping addTopping={addTopping} pizza={pizza} />}
          />
          <Route path='/order' element={<Order pizza={pizza} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
