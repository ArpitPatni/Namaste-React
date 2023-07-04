import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTRO_LIST } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Body = () => {
  const [allRestro, setAllRestro] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    getRestros();
  }, []);

  async function getRestros() {
    const data = await fetch(SWIGGY_RESTRO_LIST);
    const json = await data.json();
    setAllRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestros(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are offline please check your internet connection</h1>;
  }

  if (!allRestro) return null;

  return allRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5">
        <input
          type="text"
          className="m-5 outline"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const filteredData = filterData(searchText, allRestro);
              setFilteredRestros(filteredData);
            }
          }}
        />
        <button
          onClick={() => {
            const filteredData = filterData(searchText, allRestro);
            setFilteredRestros(filteredData);
          }}
          className="bg-slate-400 rounded-lg p-1"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center gap-9 flex-wrap">
        {/* write logic here */}
        {filteredRestros.length === 0 ? (
          <h1>No Restros Found</h1>
        ) : (
          filteredRestros.map((restro) => {
            return (
              <Link key={restro.data.id} to={"/restro/" + restro.data.id}>
                <RestaurantCard {...restro.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
