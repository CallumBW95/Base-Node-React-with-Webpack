import React from "react";
import PropTypes from "prop-types";
const Menu = ({ links }) => (
  <div id="menu">
    <ul>
      {links.map(function(link) {
        return (
          <li>
            <a href={link.href}>{link.text}</a>
          </li>
        )
      })}
    </ul>
  </div>
);
Menu.propTypes = {
  links: PropTypes.array.isRequired
};
export default Menu;
