import { UPDATE_SEARCH_TERM } from "../actions/actionTypes";

  export default function(state = '', action) {
    switch (action.type) {
        case UPDATE_SEARCH_TERM:
          return {
            ...state,
            searchPrice: action.data.price
          };

          default: {
              return state;
          }
        }
  }