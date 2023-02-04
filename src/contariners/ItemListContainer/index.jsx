import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../componets/ItemList";
import { db } from "../../firebase/config";
import { collection, getDocs, query,where } from "firebase/firestore";
import "./style.css";

const ItemListContainer = () => {
    const [products, setProductos] = useState([]);
    const [loader, setLoader] = useState(true);
    const { categoryID } = useParams();

    useEffect(() => {
        async function getProductos() {
            let querySnapshot;
            if (categoryID) {
                const q = query(
                    collection(db, "Productos"),
                    where("category", "==", categoryID)
                );
                querySnapshot = await getDocs(q);
            } else {
                querySnapshot = await getDocs(collection(db, "Productos"));
            }
            const productosdb = [];
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const producto = {
                    id: doc.id,
                    ...doc.data(),
                };
                productosdb.push(producto);
            });
            setProductos(productosdb);
            setLoader(false);
        }
        getProductos();
    }, [categoryID]);
    return (
        <>
        {
            
                loader  === true ?  <h2>Loading...</h2> : 
                <div className="list-container">
                <ItemList productos={products} />
            </div>
            
            
        }
       
        </>
        
    );
};

export default ItemListContainer;
