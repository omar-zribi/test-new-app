import { GET_RECIPES,ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, SELECT_RECIPE } from '../actionTypes/recipeActionTypes';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    tags: 'under_30_minutes'
  },
  headers: {
    'x-rapidapi-key': '649fdd0e7amshb691e716ca134ebp1a064cjsnefb8059e3706',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

export const fetchRecipes = () => async (dispatch) => {
  try {
    const response = await axios.request(options);
    dispatch({
      type: GET_RECIPES,
      payload: response.data
    });
  } catch (error) {
    console.error(`Erreur lors de la récupération des recettes: ${error}`);
    throw error;
  }
};


export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe
});

export const editRecipe = (recipe) => ({
  type: EDIT_RECIPE,
  payload: recipe
});

export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  payload: id
});

export const selectRecipe = (recipe) => ({
  type: SELECT_RECIPE,
  payload: recipe
});
