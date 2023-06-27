import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
function RestroMenu() {
  const params = useParams();
  const [restro, setRestro] = useState(null);
  const { id } = params;
  useEffect(() => {
    getRestroMenu();
  }, []);

  async function getRestroMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.037371586692027&lng=77.61706240475178&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestro(json.data);
  }
  if (restro === null) return <Shimmer />;
  const { name } = restro.cards[0].card.card.info;
  const { itemCards } =
    restro?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h1>Menu List</h1>
        {/* {itemCards.map((item) => (
          <div>{item.card.info.name}</div>
        ))} */}
        {itemCards.map((item) => {
          return (
            <div key={item.card.info.id}>
              <img src={IMG_CDN_URL + item.card.info.imageId} alt="" />
              <h1>{item.card.info.name}</h1>
              <h5>
                Price:
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RestroMenu;
