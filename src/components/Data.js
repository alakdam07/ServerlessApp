import React from "react";

function Data({ title, calories, ingredients, image, loading }) {
  return (
    <div>
      <h1>{loading ? "Loading..." : title}</h1>
      <h3>{loading ? "Loading..." : calories.toFixed(2)} Calories</h3>
      <ul>
        {ingredients.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <img alt="img" src={image} />
    </div>
  );
}

export default Data;
