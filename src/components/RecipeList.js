import React, { Component } from "react";

export default class RecipeList extends Component {
  render() {
    return (
      <div>
        <h2>Liste des Recettes</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
              {recipe.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}