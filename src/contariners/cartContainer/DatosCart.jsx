import React, { useContext } from 'react'
import { GoX } from "react-icons/go";
import { Shop } from '../../context/ShopProvider';


const DatosCart = ({producto}) => {
  const {eliminarProducto} =useContext(Shop)


   

  return (
    <tr>
        <th scope="row">{producto.id}</th>
        <td><img src={producto.image} alt="ItemCarrito" style={{height: 150}}/></td>
        <td>{producto.title}</td>
        <td>{producto.quantity}</td>
        <td>{producto.price}</td>
        <td><GoX onClick={()=>eliminarProducto(producto.id)}></GoX></td>
      </tr>
  )
}

export default DatosCart