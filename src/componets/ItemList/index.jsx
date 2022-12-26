import React from 'react'
import Item from "../../componets/Item";
const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map(producto=>{
           return <Item producto ={producto}  key= {producto.id}/>
        })}   
    </div>
  )
}

export default ItemList