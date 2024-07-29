import React from 'react';
import { useSelector } from 'react-redux';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  const selectedRecipe = useSelector(state => state.recipes.selectedRecipe);

  return (
    <div>
      <RecipeList />
      {/* <RecipeForm /> */}
      {/* {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />} */}
    </div>
  );
};

export default App;
