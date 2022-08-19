import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../redux/cart/actions";

const CartItem = ({ item }) => {
  const { title, id, price, quantity, totalQuantity } = item;

  const dispatch = useDispatch();
  const handleIncrement = (id, title, price, totalQuantity) => {
    if (totalQuantity > 0) {
      dispatch(increment(id, title, price, totalQuantity));
    }
  };
  const handleDecrement = (id, title, price, quantity) => {
    if (quantity > 1) {
      dispatch(decrement(id, title, price));
    } else {
      dispatch(remove(id, quantity, price));
    }
  };
  const handleRemove = (id, quantity, price) => {
    dispatch(remove(id, quantity, price));
  };

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{title}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <p></p>
          <button
            onClick={() => handleDecrement(id, title, price, quantity)}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => handleIncrement(id, title, price, totalQuantity)}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            onClick={() => handleRemove(id, quantity, price)}
            className="focus:outline-none bg-red-700 text-xs hover:bg-red-800 text-white font-bold py-1 px-1.5  rounded-full inline-flex items-center"
          >
         <i class="ri-close-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
