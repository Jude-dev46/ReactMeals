import { Fragment } from "react";

import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
// import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        {/* <Meals /> */}
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}

export default App;
