import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount";
import "./style.css"

const itemDetal = ({ detail }) => {

 const [quantity, setQuiantity] = useState(0)


  const onAdd= (cantidad) => {
    console.log("Se agrego la cantidad de "+ cantidad)
  }
  return (
    <>
    
     <div className="card mb-3" style={{maxWidth: '800px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {detail.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{detail.title}</h5>
        <p className="card-text">{detail.description}</p>
        <p>{detail.price}</p>
        {
          
        }
        <ItemCount stock={10}inicial={1} onAdd={onAdd}/>
      </div>
    </div>
  </div>
</div>
    </>
   
  );
};

export default itemDetal;
