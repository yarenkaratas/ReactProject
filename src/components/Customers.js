import { Button, Table, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;

function CategoryTable() {
  const [customers, setcustomers] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get("https://northwind.vercel.app/api/customers").then((res) => {
      setcustomers(res.data);
      setloading(false);
    });
  };
  const deleteCustomer = (id) => {
    confirm({
      title: "Are you sure delete this customer?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        setloading(true);
        axios
          .delete(`https://northwind.vercel.app/api/customers/${id}`)
          .then((res) => {
            getCustomers();
          });
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const navigate = useNavigate();

  const updateItem = (id) => {
    navigate("/customers/update/" + id);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      sorter: (a, b) => a.contactName.localeCompare(b.contactName),
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <Button
          onClick={() => deleteCustomer(id)}
          type="primary-outline"
          danger
        >
          Delete
        </Button>
      ),
    },
    {
      title: "Update",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => updateItem(id)} type="primary">
          Update
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        bordered={true}
        dataSource={customers}
        pagination={{ pageSize: "8" }}
        columns={columns}
        loading={loading}
      ></Table>
    </>
  );
}

export default CategoryTable;
