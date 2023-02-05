import { createContext, useState } from "react";
import React from "react";


export const Shop = createContext();

const ShopProvider = ({ children }) => {
  
    const addProduct = (unProducto) => {
        let existeProdCarrito = ExisteProductoCarrito(unProducto.id);
        if(existeProdCarrito){
            const productoRepetido = productos.find(prod => prod.id === unProducto.id);
            productoRepetido.quantity += unProducto.quantity
            setProductos([...productos])

        }else{
            setProductos([...productos, unProducto]);

        }
   
    };
    function eliminarProducto(ID){
        let nuevosProductos = productos.filter(prod => prod.id !== ID);
        setProductos(nuevosProductos)
        
    }
    const totalCompra = ()=>{
        let total = 0;
        for(const producto of productos){
            total += producto.price * producto.quantity
        }
        return total
    }

    const limpiarCarrito = () => {
        setProductos([]);
    };
    const cartCount =() => {
        let cantidadTotal = 0
        for ( const producto of productos) {
            cantidadTotal += producto.quantity
        }
        return cantidadTotal
    };

    const ExisteProductoCarrito = (ID) => {
        return productos.some(producto => producto.id === ID);
    };
    const [productos, setProductos] = useState([]);
    return <Shop.Provider value={{ productos, addProduct , cartCount, limpiarCarrito, totalCompra, eliminarProducto}}>{children} </Shop.Provider>;
};

export default ShopProvider;
