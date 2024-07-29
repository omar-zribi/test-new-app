// import { createStore, combineReducers } from 'redux';
// import recipeReducer from './reducers/recipeReducer';

// const rootReducer = combineReducers({
//   recipes: recipeReducer
// });

// const store = createStore(rootReducer);

// export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import recipeReducer from './reducers/recipeReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;