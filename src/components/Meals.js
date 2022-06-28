import React from "react";

const Meals = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <p> Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
      <p>{meal.strInstructions.slice(0, 700)}</p>
    </div>
  );
};

export default Meals;
