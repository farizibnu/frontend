// src/components/FormInputTenan.js
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormInputTenan = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:3001/api/tenan', values);
      console.log('Tenan added successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error adding tenan:', error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div>
        <h2>Form Input Data Tenan</h2>
        <Form
        form={form}
        name="formInputTenan"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        >
        <Form.Item
            label="Nama Tenan"
            name="namaTenan"
            rules={[
            { required: true, message: 'Nama Tenan harus diisi!' },
            { max: 255, message: 'Nama Tenan maksimal 255 karakter!' },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Nomor HP"
            name="hp"
            rules={[
            { required: true, message: 'Nomor HP harus diisi!' },
            {
                pattern: /^[0-9]+$/,
                message: 'Nomor HP hanya boleh berisi angka!',
            },
            { max: 15, message: 'Nomor HP maksimal 15 karakter!' },
            ]}
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

export default FormInputTenan;
