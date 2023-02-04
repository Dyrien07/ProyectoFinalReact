import React from 'react'
import Item from "../../componets/Item";
import "./style.css"
const ItemList = ({productos}) => {
  return (
    <div className='list-container'>
        {productos.map(producto=>{
           return <Item producto ={producto}  key= {producto.id}/>
        })}   
    </div>
  )
}

export default ItemList