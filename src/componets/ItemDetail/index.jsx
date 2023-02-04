import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import ItemCount from "../ItemCount";
import toast, { Toaster } from 'react-hot-toast';

import "./style.css"


const ItemDetal = ({ detail }) => {
 const [quantity, setQuiantity] = useState(0)
const {addProduct} = useContext(Shop)

  const onAdd= (cantidad) => {
    console.log("Se agrego la cantidad de "+ cantidad)
    setQuiantity(cantidad)
    addProduct({...detail, quantity: cantidad})
  }
 if(detail === 0){
  toast.loading("Cargando Producto...")
 }
  
  return (
    <>
    <Toaster>

    </Toaster>
    
     <div className="card mb-3" style={{maxWidth: '800px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {detail.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{detail.title}</h5>
        <p className="card-text">{detail.description}</p>
        <p>${detail.price}</p>
        {
          quantity === 0 ? 
          <ItemCount stock={10}inicial={1} onAdd={onAdd}/> :
          <button className="btn btn-warning">
          <Link to="/cart">
            Ir al carrito
          </Link>
          </button>
        }
        
      </div>
    </div>
  </div>
</div>
    </>
   
  );
};

export default ItemDetal;
