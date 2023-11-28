import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const FormUpdateTenan = ({ tenanId, onUpdateSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch existing tenan data and set the form values
    const fetchTenanData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tenan/${tenanId}`);
        const tenanData = response.data;

        // Set form values
        form.setFieldsValue({
          namaTenan: tenanData.namaTenan,
          hp: tenanData.hp,
        });
      } catch (error) {
        console.error('Error fetching tenan data:', error.message);
      }
    };

    fetchTenanData();
  }, [tenanId, form]);

  const handleUpdateTenan = async (values) => {
    try {
      setLoading(true);

      // Send update request to the server
      await axios.put(`http://localhost:3001/tenan/${tenanId}`, values);

      message.success('Update success');
      onUpdateSuccess(); // Trigger callback to inform parent component about the success

      // Reset form fields
      form.resetFields();
    } catch (error) {
      console.error('Error updating tenan:', error.message);
      message.error('Error updating tenan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <h2>Form Update Data Tenan</h2>
        <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdateTenan}
        >
        <Form.Item
            label="Nama Tenan"
            name="namaTenan"
            rules={[{ required: true, message: 'Please enter the tenan name' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Nomor HP"
            name="hp"
            rules={[{ required: true, message: 'Please enter the HP number' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
            Update
            </Button>
        </Form.Item>
        </Form>
    </div>
  );
};

export default FormUpdateTenan;
