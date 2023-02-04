import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../../componets/ItemDetail";


const ItemDetailContainer
 = () => {
  const [detail, setDetail] = useState({});
  const [loader, setLoader] = useState(true);
  const  {detailID} = useParams()
  console.log(detailID)

  useEffect(() => {
    
async function getProducto(){
  const docRef = doc(db, "Productos", detailID);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const productoDetail = {
      id:docSnap.id,
      ...docSnap.data()
    }
setDetail(productoDetail)
setLoader(false)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!"); 
  }
  
}
getProducto();

  }, [detailID]);
  
  return (
    <React.Fragment>
      {
        loader === true ?  <h2>Cargando...</h2>:
        <><h2>{detail.category}</h2><div className="list-container">
            <ItemDetail detail={detail} />
          </div></>
      }
    
    </React.Fragment>
  );
};

export default ItemDetailContainer
;

