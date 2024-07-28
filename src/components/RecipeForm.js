import React, { useState } from 'react';

const RecipeForm = ({ onSave, recipe }) => {
  const [name, setName] = useState(recipe ? recipe.name : '');
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : []);
  const [instructions, setInstructions] = useState(recipe ? recipe.instructions : '');

  const handleSave = () => {
    onSave({ name, ingredients, instructions });
  };

  return (
    <div>
      <h2>{recipe ? 'Modifier Recette' : 'Ajouter Recette'}</h2>
      <input
        type="text"
        placeholder="Nom de la recette"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        placeholder="Ingrédients (séparés par des virgules)"
        value={ingredients.join(', ')}
        onChange={e => setIngredients(e.target.value.split(',').map(ing => ing.trim()))}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
      />
      <button onClick={handleSave}>Enregistrer</button>
    </div>
  );
};

export default RecipeForm;
