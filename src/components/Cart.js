import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex items-center">
        <div>Total items in your cart: {cartItems.length}</div>
        <button
          className="p-2 m-2 bg-slate-500 rounded-md"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex gap-2">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
