import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../componets/ItemList";
import "./style.css";

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const { categoryID } = useParams();


  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      return response.json();
    }).then(products => {
      if (categoryID) {
        let productosfiltrados = products.filter((producto) => producto.category === categoryID);
        setProductos(productosfiltrados);
      } else
        setProductos(products);
    })
  }, [categoryID]);
  return (
    <React.Fragment>
      <div className="list-container">
        <ItemList productos={products} />
      </div>
    </React.Fragment>
  );
};

export default ItemListContainer;
