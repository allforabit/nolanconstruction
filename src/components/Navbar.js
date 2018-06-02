import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import { Logo } from "./logo";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <Logo color="blue" />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
