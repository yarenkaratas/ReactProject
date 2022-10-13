import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { message, Space } from "antd";

import React, { useState } from "react";

function AddCustomer() {
  const [customer, setcustomer] = useState([]);
  const [form] = Form.useForm();

  const success = () => {
    message.success("Added successfully");
  };
  const submitForm = (values) => {
    axios
      .post("https://northwind.vercel.app/api/customers", values)
      .then((res) => setcustomer(res.data));
    success();
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={submitForm}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please input your company Name!" },
                { max: 30 },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Contact Name"
              name="contactName"
              rules={[
                { required: true, message: "Please input your Contact Name!" },
                { max: 30 },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item
              label="Contact Title"
              name="contactTitle"
              rules={[
                { required: true, message: "Please input your Contact Title!" },
                { max: 30 },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Add
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form>
    </>
  );
}

export default AddCustomer;
