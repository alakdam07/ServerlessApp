import React, { useEffect, useState } from "react";
import Data from "./Data";
import { API_ID, API_KEY } from "../../Api.js";

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
      .then(data => setContent(data.hits))
      .catch(err => console.log("upps", err));
    setFood("");
    setLoading(false);
  };

  const getFood = e => {
    e.preventDefault();
    setSearch(food);
  };

  return (
    <React.Fragment>
      <form onSubmit={getFood} className="wrapper">
        <input
          type="text"
          value={food}
          onChange={e => setFood(e.target.value)}
          placeholder="search for recipe"
          className=""
        />
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
        >
          search
        </button>
      </form>
      {content.map((items, index) => (
        <div key={index}>
          <Data
            key={items.recipe.label}
            title={items.recipe.label}
            calories={items.recipe.calories}
            ingredients={items.recipe.ingredientLines}
            image={items.recipe.image}
            loading={loading}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Recipe;
