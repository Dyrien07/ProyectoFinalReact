import React from "react";
import "./style.css"

const itemDetal = ({ detail }) => {
  return (
    <div classname="card text-bg-dark">
      <img src={detail.image} classname="card-img" alt={detail.title} />
      <div classname="card-img-overlay">
        <h5 classname="card-title">{detail.title}</h5>
        <p classname="card-text">{detail.description}</p>
        <p classname="card-text">
          <small>${detail.price}</small>
        </p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary btn-detail" type="button">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default itemDetal;
