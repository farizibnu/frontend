import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormUpdateBarang = ({ kodeBarang, onUpdateSuccess }) => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    // Fetch data barang berdasarkan kode_barang
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/barang/${kodeBarang}`);
        setInitialValues(response.data); // Set nilai awal formulir dengan data barang
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [kodeBarang]);

  const handleUpdate = async (values) => {
    try {
      await axios.put(`http://localhost:3001/barang/${kodeBarang}`, values);
      console.log('Update success');
      onUpdateSuccess(); // Panggil fungsi yang diberikan oleh parent setelah berhasil melakukan update
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  return (
    <div className='card'>
      <h2>Form Update Data Barang</h2>
      <Form form={form} onFinish={handleUpdate} initialValues={initialValues}>
        <Form.Item label="Nama Barang" name="nama_barang" rules={[{ required: true, message: 'Nama Barang harus diisi' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Satuan" name="satuan" rules={[{ required: true, message: 'Satuan harus diisi' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Harga Satuan" name="harga_satuan" rules={[{ required: true, type: 'number', message: 'Harga Satuan harus diisi' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Stok" name="stok" rules={[{ required: true, type: 'number', message: 'Stok harus diisi' }]}>
          <Input type="number" />
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

export default FormUpdateBarang;
