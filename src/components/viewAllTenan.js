import React, { useState, useEffect } from 'react';
import { Table, Popconfirm, message } from 'antd';
import axios from 'axios';

const ViewAllTenan = () => {
  const [tenanData, setTenanData] = useState([]);

  useEffect(() => {
    // Fetch data tenan
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tenan');
        setTenanData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Kode tenan',
      dataIndex: 'kode_tenan',
      key: 'kode_tenan',
    },
    {
      title: 'Nama Tenan',
      dataIndex: 'nama_tenan',
      key: 'nama_tenan',
    },
    {
      title: 'Nomor HP Tenan',
      dataIndex: 'hp_tenan',
      key: 'hp_tenan',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this tenan?"
          onConfirm={() => handleDelete(record.kode_tenan)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete</a>
        </Popconfirm>
      ),
    },
  ];

  const handleDelete = async (kode_tenan) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/tenan/${kode_tenan}`);
      setTenanData(prevData => prevData.filter(tenan => tenan.kode_tenan !== kode_tenan));
      message.success(response.data);
    } catch (error) {
      console.error('Error deleting data:', error.message);
      message.error('Failed to delete data');
    }
  };

  return (
    <div>
      <h2>View All Data Tenan</h2>
      <Table dataSource={tenanData} columns={columns} />
    </div>
  );
};

export default ViewAllTenan;
