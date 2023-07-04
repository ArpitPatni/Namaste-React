import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    // console.log("Child-Constructor " + this.props.name);
  }

  async componentDidMount() {
    //API CALL
    const data = await fetch("https://api.github.com/users/thearpitpatni");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log("Child-Component Did Mount " + this.props.name);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component will unmount");
  }
  render() {
    // console.log("Child-Render " + this.props.name);
    return (
      <div>
        <h1>Class Based Component</h1>
        <img
          style={{ width: 100 }}
          src={this.state.userInfo.avatar_url}
          alt="profile-pic"
        />
        <h1>Name:{this.state.userInfo.login}</h1>
        <h1>Location:{this.state.userInfo.id}</h1>
      </div>
    );
  }
}
export default ProfileClass;
