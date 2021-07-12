import { combineReducers } from 'redux';

import orderReducer from "./orderReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    orders: orderReducer,
    search: searchReducer
  });