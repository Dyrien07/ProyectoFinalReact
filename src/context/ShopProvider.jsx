import { createContext, useState } from "react";
import React from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    return <Shop.Provider value={{ productos }}>{children}</Shop.Provider>;
};

export default ShopProvider;
