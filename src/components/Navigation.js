import React from "react";
import { Icon, Navbar } from "react-materialize";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar
      className="menu"
      alignLinks="right"
      brand={<span className="brand-logo">Cinema Ferm </span>}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li>
          <Link to="/features">
            <Icon left>settings</Icon>Features
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <Icon left>money</Icon>Pricing
          </Link>
        </li>
        <li>
          <Link to="/news">
            <Icon left>newspaper</Icon>News
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
      {/* <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div> */}
    </Navbar>
  );
}

export default Navigation;
