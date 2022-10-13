import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Customers from "./Customers";
import AddCustomer from "./AddCustomer";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import CustomerUpdate from "./CustomerUpdate";
const { Header, Content, Footer } = Layout;

function AnaSayfa() {
  const items = [
    {
      label: (
        <Link to={"/customers"} key={"1"}>
          Customers
        </Link>
      ),
    },

    {
      label: (
        <Link to={"/products"} key={"2"}>
          Products
        </Link>
      ),
    },
    {
      label: (
        <Link to={"/addcustomer"} key={"3"}>
          Add Customer
        </Link>
      ),
    },
  ];
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            color: "#fff1f0",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: 64,
          }}
        >
          <Routes>
            <Route path="/" element={<Customers />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route
              path="/customers/update/:id"
              element={<CustomerUpdate />}
            ></Route>
            <Route
              path="/productdetail/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/addcustomer" element={<AddCustomer />}></Route>
          </Routes>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </>
  );
}

export default AnaSayfa;
