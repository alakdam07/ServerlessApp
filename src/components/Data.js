import React from "react";

function Data({ title, calories, ingredients, image, loading }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col s12 m5">
          <div className="card ">
            <div className="card-image">
              <img alt="img" src={image} />
              <span className="card-title blue lighten-1">
                {loading ? "Loading..." : title}
              </span>
              {/* <span>
                {loading ? "Loading..." : calories.toFixed(2)} Calories
              </span> */}
            </div>
            <div className="card-content">
              <h5>Ingredients</h5>
              <ol>
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Data;
