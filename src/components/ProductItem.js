import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/cart/actions";
import { useSelector } from "react-redux";

const ProductItem = ({ item }) => {
  const [totalQuantity, setTotalQuantity] = useState(item.totalQuantity);
  const { title, id, price } = item;

  const cartState = useSelector((state) => state.cartProduct);

  useEffect(() => {
    const currentitem = cartState?.find((item) => item.id === id);
    if (currentitem) {
      setTotalQuantity(currentitem.totalQuantity);
    } else {
      setTotalQuantity(item.totalQuantity);
    }
  }, [id, cartState, item.quantity, item.totalQuantity]);

  const dispatch = useDispatch();

  const handleIncrement = (id, title, price, totalQuantity) => {
    if (totalQuantity > 0) {
      dispatch(increment(id, title, price, totalQuantity));
    }
  };

  return (
    <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>
            {title} (
            {totalQuantity !== 0 ? (
              totalQuantity
            ) : (
              <span className="text-red-600 text-m">Out of stock</span>
            )}
            )
          </p>
          <p className="text-gray-400 text-base">$ {price}</p>
        </div>
        <div className="text-lg font-semibold">
          <button
            onClick={() => handleIncrement(id, title, price, totalQuantity)}
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
