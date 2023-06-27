import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTRO_LIST } from "../constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestro, setAllRestro] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchText, setSearchText] = useState("");
  function filterData(searchText, restros) {
    const data = restros.filter((restro) =>
      restro?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return data;
  }
  useEffect(() => {
    getRestros();
  }, []);

  async function getRestros() {
    const data = await fetch(SWIGGY_RESTRO_LIST);
    const json = await data.json();
    setAllRestro(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestros(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestro) return null;

  return allRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
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
          className="search-btn"
        >
          Search
        </button>
      </div>
      <div className="restro-list">
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
