import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
  <img src={producto.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{producto.title}</h5>
    <p className="card-text">Precio:{producto.price}</p>
    <Link to={`/detail/${producto.id}`} className="btn btn-primary">Ir al detalle</Link>
  </div>
</div>
  )
}

export default Item