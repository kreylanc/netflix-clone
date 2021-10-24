import React from "react";
import { Link } from "react-router-dom";

function NavOptions({ link, title }) {
  return (
    <div className="hidden md:flex ml-4 justify-between text-gray-200 group">
      <Link to={link}>
        <h3 className="hover:text-white">{title}</h3>
      </Link>
    </div>
  );
}

export default NavOptions;
