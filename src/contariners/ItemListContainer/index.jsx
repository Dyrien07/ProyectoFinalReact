import React from "react";
import Item from "../../componets/Item";
import "./style.css"


const ItemListContainer = ({greeting}) => {
    const saludo = "Hola, soy un greeting"
  return (
    <React.Fragment>
         <h1>{greeting = saludo}</h1>
    <div className="list-container">
        
      <Item title={"Pelota 1"} />
      <Item title={"pelota 2"}/>
      <Item title={"Pelota 3"} />
    </div>
    </React.Fragment>

   
  );
};

export default ItemListContainer;
