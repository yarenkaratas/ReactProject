import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CustomerUpdate() {
  const [detail, setdetail] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/customers/${id}`)
      .then((res) => setdetail(res.data));
  }, []);

  let { id } = useParams();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdetail((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://northwind.vercel.app/api/customers/${id}`, {
        companyName: detail.companyName,
        contactName: detail.contactName,
        contactTitle: detail.contactTitle,
      })
      .then((res) => setdetail(res.data));
    //console.log(detail);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Update Page</h1>
        <hr></hr>
        <label style={{ fontSize: "20px" }}>Company Name : </label>
        <input
          name="companyName"
          value={detail.companyName}
          onChange={handleChange}
        />
        <br></br>

        <label style={{ fontSize: "20px" }}>Contact Name : </label>
        <input
          name="contactName"
          value={detail.contactName}
          onChange={handleChange}
        />
        <br></br>

        <label style={{ fontSize: "20px" }}>Contact Title : </label>
        <input
          name="contactTitle"
          value={detail.contactTitle}
          onChange={handleChange}
        />
        <br></br>
        <br></br>

        <button type="submit">Update Post</button>

        <button onClick={() => navigate(-1)}>Back To Customers Page</button>
      </form>
    </>
  );
}

export default CustomerUpdate;
