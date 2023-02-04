import React, { useContext } from "react";
import "./style.css";
import { BsCart3 } from "react-icons/bs";
import { Shop } from "../../context/ShopProvider";

const Cartwidget = ({ cantidad }) => {
        const {cartCount} = useContext(Shop);


        return (
                <div>
                        <span>{cartCount()}</span>
                        <BsCart3 style={{ height: 40, width: 40 }}></BsCart3>
                </div>
        );
};

export default Cartwidget;
