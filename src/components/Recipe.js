import React, { useEffect, useState } from "react";
import Data from "./Data";
import { API_ID, API_KEY } from "./Api";

function Recipe() {
  const [content, setContent] = useState([]);
  const [food, setFood] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = () => {
    setLoading(true);
    fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setContent(data.hits));
    setFood("");
    setLoading(false);
  };

  const getFood = e => {
    e.preventDefault();
    setSearch(food);
  };

  return (
    <div className="wrapper">
      <form onSubmit={getFood}>
        <input
          type="text"
          value={food}
          onChange={e => setFood(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {content.map(items => (
        <Data
          key={items.recipe.label}
          title={items.recipe.label}
          calories={items.recipe.calories}
          ingredients={items.recipe.ingredientLines}
          image={items.recipe.image}
          loading={loading}
        />
      ))}
    </div>
  );
}

export default Recipe;
