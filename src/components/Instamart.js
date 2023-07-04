import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

function Instamart() {
  const [visibleSection, setIsVisibleSection] = useState("Carrers");
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quidem explicabo doloremque nam tempore ad animi quia reprehenderit! Quaerat cupiditate aperiam nostrum rem reiciendis sint consequatur adipisci sunt nemo dolore tempore odio neque tenetur, voluptatum quibusdam. Delectus quos expedita aut placeat magni voluptate, eaque natus, velit harum cumque nam dolorem, odit consequuntur sed doloremque similique excepturi temporibus aspernatur fugit nulla mollitia dolore labore iste in. Explicabo itaque placeat nemo rem vel minima soluta. Recusandae, voluptatibus ea! Possimus dolorem optio beatae dolor doloribus repellat, deleniti magni exercitationem officia facilis odit minus autem eos molestiae ipsam aut quibusdam porro dolores unde! Magnam!"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quidem explicabo doloremque nam tempore ad animi quia reprehenderit! Quaerat cupiditate aperiam nostrum rem reiciendis sint consequatur adipisci sunt nemo dolore tempore odio neque tenetur, voluptatum quibusdam. Delectus quos expedita aut placeat magni voluptate, eaque natus, velit harum cumque nam dolorem, odit consequuntur sed doloremque similique excepturi temporibus aspernatur fugit nulla mollitia dolore labore iste in. Explicabo itaque placeat nemo rem vel minima soluta. Recusandae, voluptatibus ea! Possimus dolorem optio beatae dolor doloribus repellat, deleniti magni exercitationem officia facilis odit minus autem eos molestiae ipsam aut quibusdam porro dolores unde! Magnam!"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title={"Carrers page"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quidem explicabo doloremque nam tempore ad animi quia reprehenderit! Quaerat cupiditate aperiam nostrum rem reiciendis sint consequatur adipisci sunt nemo dolore tempore odio neque tenetur, voluptatum quibusdam. Delectus quos expedita aut placeat magni voluptate, eaque natus, velit harum cumque nam dolorem, odit consequuntur sed doloremque similique excepturi temporibus aspernatur fugit nulla mollitia dolore labore iste in. Explicabo itaque placeat nemo rem vel minima soluta. Recusandae, voluptatibus ea! Possimus dolorem optio beatae dolor doloribus repellat, deleniti magni exercitationem officia facilis odit minus autem eos molestiae ipsam aut quibusdam porro dolores unde! Magnam!"
        }
        isVisible={visibleSection === "Carrers"}
        setIsVisible={() => setIsVisibleSection("Carrers")}
      />
    </div>
  );
}

export default Instamart;
