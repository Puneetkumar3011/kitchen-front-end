import { UPDATE_ORDERS, UPDATE_SEARCH_TERM } from "./actionTypes"

export const updateSearchTerm = (data) => {
    return{
        type: UPDATE_SEARCH_TERM,
        data
    }
};

export const updateOrders = (data) => {
    return{
        type: UPDATE_ORDERS,
        data
    }
};