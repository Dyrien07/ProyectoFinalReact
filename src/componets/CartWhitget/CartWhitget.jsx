import React from "react";
import "./style.css";
import  { BsCart3 } from 'react-icons/bs';

const Cartwidget = ({cantidad}) => {
        return (
       <div>
        <BsCart3 style={{height:40, width: 40}}></BsCart3>
       </div>
    )
}

export default Cartwidget;