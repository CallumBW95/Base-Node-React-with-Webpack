import React from "react";
import ReactDOM from "prop-types";
const Menu = ({ links }) => (
  <div id="menu">
    <ul>
      links.forEach(function(link) {
        <li><a href="link.href">link.text</a></li>
      });
    </ul>
  </div>
);
Menu.propTypes = {
  links: PropTypes.array.isRequired
};
export default Menu;
