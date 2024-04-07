import React, { useState } from "react";
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarLinks } from "../../../constants/constant";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="menu">
          <RxHamburgerMenu />
        </div>
        <ul className="menu-options">
          <li>
            <a href="#">Women's Fashion</a>
          </li>
          <li>
            <a href="#">Men's fashion</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Home & Electronics</a>
          </li>
        </ul>
        <div className="logo_container">
          <a href="#">
            <img className="store_logo" src="/logo.jpeg" alt="myntra logo" />
          </a>
        </div>

        <nav className="nav_bar">
          {navBarLinks.map((Element) => {
            return (
              <div key={Element.link} className="activeHandler">
                <NavLink
                  className="navElements"
                  key={Element.link}
                  to={Element.link}
                >
                  {Element.name}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <FaSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div>
          <a href="#">
            <button className="log"><a href="/admin">Login</a></button>
          </a>
        </div>

        <div className="action_bar">
          <div className="action_container">
            <a href="#" className="material-symbols-outlined action_icon">
              <FaRegHeart />
            </a>
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <a href="#" className="material-symbols-outlined action_icon">
              <FiShoppingCart />
            </a>
            <span className="action_name">Cart</span>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Navbar;
