import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormInputKasir = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/api/kasir', values);
      console.log(response.data);
      // Tambahkan logika atau tindakan lain setelah berhasil menyimpan data
    } catch (error) {
      console.error('Error:', error.message);
      // Tambahkan logika atau tindakan lain untuk menangani kesalahan
    }
  };

  return (
    <div>
      <h2>Form Input Data Kasir</h2>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Kode Kasir"
          name="kode_kasir"
          rules={[{ required: true, message: 'Please input the Kode Kasir!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nama Kasir"
          name="nama"
          rules={[{ required: true, message: 'Please input the Nama Kasir!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nomor HP"
          name="hp"
          rules={[{ required: true, message: 'Please input the Nomor HP!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormInputKasir;
