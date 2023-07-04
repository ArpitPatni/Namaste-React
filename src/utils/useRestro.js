import { useEffect, useState } from "react";

const useRestro = (id) => {
  const [restro, setRestro] = useState(null);

  useEffect(() => {
    getRestroMenu();
  }, []);

  async function getRestroMenu() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.037371586692027&lng=77.61706240475178&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    setRestro(json.data);
  }
  return restro;
};
export default useRestro;
