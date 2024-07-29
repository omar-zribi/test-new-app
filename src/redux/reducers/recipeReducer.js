// src/reducers/recipeReducer.js
import { GET_RECIPES,ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, SELECT_RECIPE } from '../actionTypes/recipeActionTypes';

const initialState = {
  recipes: [],
  selectedRecipe: null
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case EDIT_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
        selectedRecipe: null
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      };
    case SELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload
      };
    default:
      return state;
  }
};

export default recipeReducer;