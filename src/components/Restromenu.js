import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestro from "../utils/useRestro";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
function RestroMenu() {
  const params = useParams();

  const dispatch = useDispatch();

  const { id } = params;
  const restro = useRestro(id);
  if (restro === null) return <Shimmer />;
  const { name } = restro?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restro?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <div>
        <h1>{name}</h1>
        <h1>Menu List</h1>
        {itemCards.map((item) => {
          return (
            <div className="flex" key={item.card.info.id}>
              {/* <img src={IMG_CDN_URL + item.card.info.imageId} alt="" /> */}
              <h1 className="m-2">{item.card.info.name}</h1>
              <h5 className="m-2">
                Price:
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h5>
              <button
                onClick={() => addFoodItem(item)}
                className="bg-blue-400 rounded-md m-2 p-2"
              >
                Add Item
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RestroMenu;
