import React from 'react'
import { GoX } from "react-icons/go";


const DatosCart = ({producto}) => {


   

  return (
    <tr>
        <th scope="row">{producto.id}</th>
        <td><img src={producto.image} alt="ItemCarrito" style={{height: 150}}/></td>
        <td>{producto.title}</td>
        <td>{producto.quantity}</td>
        <td>{producto.price}</td>
        <td><GoX></GoX></td>
      </tr>
  )
}

export default DatosCart