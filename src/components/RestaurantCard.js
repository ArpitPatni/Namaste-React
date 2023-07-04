import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import userContext from "../utils/userContext";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-56 bg-white shadow-md">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      {/* <h4>{cuisines?.join(", ")}</h4> */}
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4 className="font-bold">{user.name}</h4>
      <h4 className="font-bold">{user.email}</h4>
    </div>
  );
};
export default RestaurantCard;
