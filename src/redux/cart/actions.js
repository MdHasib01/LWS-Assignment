import { DECREMENT, INCREMENT, REMOVE } from "./actionTypes";

export const increment = (id, title, price, totalQuantity) => {
  return {
    type: INCREMENT,
    payload: {
      id,
      title,
      price,
      totalQuantity,
    },
  };
};

export const decrement = (id, title, price, totalQuantity) => {
  return {
    type: DECREMENT,
    payload: {
      id,
      title,
      price,
      totalQuantity,
    },
  };
};
export const remove = (id, quantity, price) => {
  return {
    type: REMOVE,
    payload: {
      id,
      quantity,
      price,
    },
  };
};
