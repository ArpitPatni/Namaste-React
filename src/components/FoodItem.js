import React from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
function FoodItem({ name, category, imageId, price, id }) {
  const dispatch = useDispatch();
  const removeItems = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="border w-44">
      <img src={IMG_CDN_URL + imageId} alt="" />
      <h1>Name:{name}</h1>
      <h1>Category{category}</h1>
      <h1>Rs:{price / 100}</h1>
      <button
        onClick={() => removeItems(id)}
        className="bg-blue-400 rounded-md m-2 p-2"
      >
        Remove Item
      </button>
    </div>
  );
}

export default FoodItem;
