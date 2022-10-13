import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const [detail, setdetail] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`).then((res) => {
      setdetail(res.data);
    });
  }, []);

  return (
    <>
      {/* <h3>Id: {detail.id}</h3> */}
      <h1 style={{ color: "#333" }}>Product Detail Page</h1>
      <hr></hr>
      <div>
        <span style={{ color: "#333", fontSize: "25px" }}>
          Product Name : {detail.name}
        </span>
      </div>
      <div>
        <span style={{ color: "#333", fontSize: "25px" }}>
          Unit Price : {detail.unitPrice}
        </span>
      </div>
      <div>
        <span style={{ color: "#333", fontSize: "25px" }}>
          Stock : {detail.unitsInStock}
        </span>
      </div>
    </>
  );
}

export default ProductDetail;
