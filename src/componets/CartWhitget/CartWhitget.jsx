import React, { useContext } from "react";
import "./style.css";
import { BsCart3 } from "react-icons/bs";
import { Shop } from "../../context/ShopProvider";

const Cartwidget = ({ cantidad }) => {
        const { productos } = useContext(Shop);


        return (
                <div>
                        <span>{productos.length}</span>
                        <BsCart3 style={{ height: 40, width: 40 }}></BsCart3>
                </div>
        );
};

export default Cartwidget;
