import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormInputBarang = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    try {
      const response = axios.post('http://localhost:3001/barang', values);
      console.log(response.data);
      form.resetFields(); // Reset formulir setelah berhasil disubmit
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>Form Input Data Barang</h2>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="Nama Barang" name="nama_barang" rules={[{ required: true, message: 'Nama Barang harus diisi' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Satuan" name="satuan" rules={[{ required: true, message: 'Satuan harus diisi' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Harga Satuan" name="harga_satuan" rules={[{ required: true,  message: 'Harga Satuan harus diisi' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Stok" name="stok" rules={[{ required: true,  message: 'Stok harus diisi' }]}>
          <Input type="number" />
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

export default FormInputBarang;
