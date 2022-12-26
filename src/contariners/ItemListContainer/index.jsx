import React, { useEffect, useState } from "react";
import ItemList from "../../componets/ItemList";
import data from "../../data/productos.JSON";
import "./style.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProductos] = useState([]);
  const readData = async () => {
    const response = await fetch(data);
    const result = await response.json();
    setProductos(result);
  }
  useEffect(() => {
    readData();
  }, []);
  return (
    <React.Fragment>
      <div className="list-container">
      <ItemList productos={products} />
   
      </div>
      
    </React.Fragment>
  );
};

export default ItemListContainer;
