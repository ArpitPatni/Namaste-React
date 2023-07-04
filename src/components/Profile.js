import React, { useEffect, useState } from "react";

function Profile(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste OP");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("UseEffect Return");
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h1>Profile Component</h1>
      <h5>Name:{props.name}</h5>
      <h5>Count:{count}</h5>
      <button onClick={() => setCount((prev) => prev + 1)}>Set Count</button>
    </div>
  );
}

export default Profile;
