import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
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
      title: 'ID Tenan',
      dataIndex: 'id_tenan',
      key: 'id_tenan',
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
  ];

  return (
    <div>
      <h2>View All Data Tenan</h2>
      <Table dataSource={tenanData} columns={columns} />
    </div>
  );
};

export default ViewAllTenan;
