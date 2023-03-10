import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducers/movieReducer";
import { theaterReducerQB } from "./reducers/theaterReducerQB";
import { userReducer } from "./reducers/userReducer";
import { theaterReducerST } from "./reducers/theaterReducerST";

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  theaterReducerQB,
  theaterReducerST,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
