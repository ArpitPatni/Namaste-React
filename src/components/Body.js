import { useState } from "react";
import { resList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restros, setRestros] = useState(resList);
  const [searchText, setSearchText] = useState("");
  function filterData(searchText, restros) {
    const data = restros.filter((restro) =>
      restro.data.name.includes(searchText)
    );
    return data;
  }
  return (
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
              const filteredData = filterData(searchText, restros);
              setRestros(filteredData);
            }
          }}
        />
        <button
          onClick={() => {
            const filteredData = filterData(searchText, restros);
            setRestros(filteredData);
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>
      <div className="restro-list">
        {restros.map((restro) => {
          return <RestaurantCard key={restro.data.id} {...restro.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
