import React from "react";
import { Link } from "react-router-dom";
import Cartwidget from "../CartWhitget/CartWhitget";

import "./style.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
                <Link to={"/category/electronics"} className="nav-link">
                  Electronica
                </Link >
                <Link to={"/category/jewelery"} className="nav-link">
                  Joyeria
                </Link >
                <Link to={"/category/men's clothing"} className="nav-link">
                  Ropa de Hombre
                </Link >
                <Link to={"/category/women's clothing"} className="nav-link">
                  Ropa de Mujer
                </Link >
                
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <a className="nav-link" href="/#">
                  Pricing
                </a>
                <a className="nav-link disabled" href="/#">Disabled</a>
              </div>
            </div>
          </div>
          <Cartwidget cantidad={3}/>
        </nav>
      </div>
      <span>
      
      </span>
     
    </React.Fragment>
  );
};

export default Navbar;
