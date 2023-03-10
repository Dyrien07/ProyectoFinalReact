import React, { useContext, useState } from "react";
import DatosCart from "./DatosCart";
import { Shop } from "../../context/ShopProvider";
import FormCompra from "./FormCompra";


function Cart() {
    const [buyConfirm, setBuyconfirm] = useState(false);
    const { productos} = useContext(Shop);
    console.log(productos);
    async function confirmarCompra() {
        setBuyconfirm(true);
    }

    
    return (
        <>
            

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Sacar del Carrito</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {productos.map((element) => {
                        return (
                            <DatosCart key={element.id} producto={element} />
                        );
                    })}
                </tbody>
            </table>
          
            {
              productos.length ===0 ? <h2>No hay productos en el Carrito </h2>:
              <button onClick={confirmarCompra} className="btn btn-primary">
              Confirmar compra
          </button>}
            {
              productos.length === 0 ? null : 
               buyConfirm === true ? (
                <FormCompra></FormCompra>
            ) : null
            }
             
           
           
        </>
    );
}

export default Cart;
