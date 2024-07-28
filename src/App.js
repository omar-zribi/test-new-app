import React, { useState } from 'react';
import './styles.css';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleSaveRecipe = (recipe) => {
    if (editingRecipe) {
      setRecipes(recipes.map(r => (r.id === editingRecipe.id ? { ...recipe, id: r.id } : r)));
    } else {
      setRecipes([...recipes, { ...recipe, id: Date.now() }]);
    }
    setEditingRecipe(null);
    setSelectedRecipe(null);
  };

  return (
    <div>
      <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
      {(selectedRecipe || editingRecipe) && (
        <RecipeForm
          onSave={handleSaveRecipe}
          recipe={editingRecipe || selectedRecipe}
        />
      )}
    </div>
  );
};

export default App;
