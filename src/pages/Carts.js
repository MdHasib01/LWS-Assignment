import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Carts = () => {
  const cartState = useSelector((state) => state.cartProduct);
  const cartItems = useSelector((state) => state.totalItem);
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cartState?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{cartItems}</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div className="flex justify-center items-center text-center">
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">${totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
