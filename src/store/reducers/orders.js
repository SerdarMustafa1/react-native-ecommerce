import { ADD_ORDER } from "../actions/orders";
import Order from "model/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(),
      };
  }
  return state;
};