import React from 'react'
import { useState } from 'react'
import "./style.css"

const ItemCount = ({ onAdd, stock, inicial}) => {
  const [count, setCount] = useState(inicial)

    function onPlus(){
      if(count < stock) setCount(count + 1)
    }

    function onMinus(){
      if(count > inicial) setCount(count -1)
    }

  return (
    <>
    <div classNameName='item-count-container'>
    <button type="button" className="btn btn-primary" onClick={onPlus}>+</button>
    <input type="number" placeholder={inicial} className='input-count' value={count} />
    <button type="button" className="btn btn-primary" onClick={onMinus}>-</button>
    <button type="button" className="btn btn-primary btn-compra"onClick={()=>onAdd(count)}>Comprar</button>
   </div>
   <div>
    Stock:{stock}
   </div>
    </>
   
  
  )
}

export default ItemCount