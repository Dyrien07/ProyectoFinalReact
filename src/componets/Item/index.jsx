import React from 'react'


const Item = ({producto}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
  <img src={producto.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5>
    <p className="card-text">Precio:{producto.precio}</p>
    <a href="/#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Item