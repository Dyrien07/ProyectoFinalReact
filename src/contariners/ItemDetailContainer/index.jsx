import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../componets/ItemDetail";


const ItemDetailContainer
 = () => {
  const [detail, setDetail] = useState({});
  const  {detailID} = useParams()
  console.log(detailID)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${detailID}`).then((response) =>{
      return response.json();
    }).then(json => {
      console.log(json)
        setDetail(json);
       
    }).catch((error) => {console.log(error)});
    
  }, [detailID]);
  
  return (
    <React.Fragment>
      <h2>{detail.category}</h2>
      <div className="list-container">
      
      <ItemDetail detail={detail} />
      </div>
      
    </React.Fragment>
  );
};

export default ItemDetailContainer
;

