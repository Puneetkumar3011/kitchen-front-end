import { UPDATE_ORDERS } from "../actions/actionTypes";

const initialState = {
    orders: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ORDERS:
          return {
            ...state,
            orders: state.orders
          };

          default: {
              return state;
          }
        }
  }