import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducers/movieReducer";
import { theaterReducer } from "./reducers/theaterReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  movieReducer,
  userReducer,
  theaterReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
