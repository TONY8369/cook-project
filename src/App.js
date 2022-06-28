import axios from "axios";
import React, { useEffect, useState } from "react";
import Meals from "./components/Meals";

const App = () => {
  const [dataMeals, setDataMeals] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  // le useEffect se jour lorsque le composant est monté //
  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setDataMeals(res.data.meals));
  }, [inputSearch]);

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals-container">
        {dataMeals &&
          dataMeals
            .slice(0, 24)
            .map((meal) => <Meals key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
