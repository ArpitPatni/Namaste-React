import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

function About2() {}

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent-constructor");
  }
  async componentDidMount() {
    //BEST PLACE TO MAKE AN API CALL
    // console.log("parent-Component Did Mount");
  }
  render() {
    // console.log("parent-render");
    return (
      <div>
        <h1>This is About us Page</h1>
        <p>This is lecture finding the path</p>
        {/* <Outlet /> */}
        <div>-------</div>
        <Profile />
        <ProfileClass name={"First"} />
      </div>
    );
  }
}
export default About;
