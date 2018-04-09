import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "../presentational/Menu";

class Header extends Component {
  constructor() {
    super();

  }
  render() {
    const links =
    [
      {
        text:'link 1',
        href:'/link_1',
      },
      {
        text:'link 2',
        href:'/link_2',
      },
      {
        text:'link 3',
        href:'/link_3',
      },
    ];
    console.log(links);
    return (
      <header>
        <h1>Logo</h1>
        <Menu links={links} />
      </header>
    );
  }
}
export default Header;
const wrapper = document.getElementById("header");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;
