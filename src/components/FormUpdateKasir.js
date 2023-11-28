// src/components/FormUpdateKasir.js
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormUpdateKasir = ({ kasirId, onUpdateSuccess }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:3001/kasir/${kasirId}`, values);
      onUpdateSuccess();
    } catch (error) {
      console.error('Error updating kasir:', error.message);
    }
  };

  return (
    <div>
      <h2>Form Update Data Kasir</h2>
      <Form
        form={form}
        name="updateKasirForm"
        onFinish={onFinish}
      >
        <Form.Item
          label="Nama Kasir"
          name="nama"
          rules={[{ required: true, message: 'Nama kasir harus diisi!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nomor HP"
          name="hp"
          rules={[
            { required: true, message: 'Nomor HP kasir harus diisi!' },
            { pattern: /^\d{10,13}$/, message: 'Nomor HP harus terdiri dari 10-13 digit angka!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormUpdateKasir;
