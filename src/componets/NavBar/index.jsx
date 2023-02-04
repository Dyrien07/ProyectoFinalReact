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
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to={"/category/Antiparras"}
                  className="nav-link active"
                >
                  Antiparras
                </Link>
                <Link
                  to={"/category/Accesorios"}
                  className="nav-link active"
                >
                  Accesorios
                </Link>
                <Link
                  to={"/category/men's clothing"}
                  className="nav-link active"
                >
                  Ropa de Hombre
                </Link>


              </div>
            </div>
          </div>
          <Cartwidget cantidad={3} />
        </nav>
      </div>
      <span></span>
    </React.Fragment>
  );
};

export default Navbar;
