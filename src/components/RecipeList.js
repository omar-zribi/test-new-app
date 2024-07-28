import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => (
  <div>
    <h2>Liste des Recettes</h2>
    <ul>
      {recipes&&recipes.map(recipe => (
        <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
          {recipe.name}
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
