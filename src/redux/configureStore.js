// import { createStore, applyMiddleware } from "redux";
// import rootReducer, { Reducer, initialState } from "./reducer";
// import thunk from 'redux-thunk';


// export const ConfigureStore = () => {
//   const store = createStore(
//     rootReducer,
//   // reducer
//     initialState,
//     applyMiddleware(thunk) // our initialState
//   );

//   return store;
// };
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Reducer} from "./reducer"; // Import reducer from your file

const rootReducer = combineReducers({
  user: Reducer,
});

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;