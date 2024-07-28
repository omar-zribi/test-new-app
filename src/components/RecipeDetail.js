import React from "react";

export default function RecipeDetail() {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingrédients</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}
