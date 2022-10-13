import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ProductDetail from "./ProductDetail";
import { Link, useNavigate } from "react-router-dom";

const { confirm } = Modal;

function Products() {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setproducts(res.data);
      setloading(false);
    });
  };

  const deleteProduct = (id) => {
    confirm({
      title: "Do you Want to delete these product?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        setloading(true);
        axios
          .delete(`https:/northwind.vercel.app/api/products/${id}`)
          .then((res) => {
            axios
              .get("https://northwind.vercel.app/api/products")
              .then((res) => {
                setproducts(res.data);
                setloading(false);
              });
          });
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const goToProductsDetails = (id) => {
    navigate(`/productdetail/${id}`);
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
    },
    {
      title: "Stock",
      dataIndex: "unitsInStock",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => deleteProduct(id)} type="primary-outline" danger>
          Delete
        </Button>
      ),
    },
    {
      title: " Go To Detail",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => goToProductsDetails(id)} type="primary">
          Go To Detail
        </Button>
      ),
    },
  ];
  return (
    <>
      <Table
        bordered={true}
        dataSource={products}
        pagination={{ pageSize: "8" }}
        columns={columns}
        loading={loading}
      ></Table>
    </>
  );
}

export default Products;
