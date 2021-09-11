import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <input onKeyDown={this.props.send} />
      </div>
    );
  }
}

export default Header;