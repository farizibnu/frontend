// src/components/ViewAllKasir.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import axios from 'axios';

const ViewAllKasir = () => {
  const [kasirData, setKasirData] = useState([]);

  useEffect(() => {
    // Fetch data kasir
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/kasir');
        setKasirData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (kode_kasir) => {
    try {
      await axios.delete(`http://localhost:3001/api/kasir/${kode_kasir}`);
      // Refresh data setelah hapus
      setKasirData(prevData => prevData.filter(kasir => kasir.kode_kasir !== kode_kasir));
      message.success('Data kasir berhasil dihapus');
    } catch (error) {
      console.error('Error deleting data:', error.message);
      message.error('Error deleting data kasir');
    }
  };

  const columns = [
    {
      title: 'ID Kasir',
      dataIndex: 'kode_kasir',
      key: 'kode_kasir',
    },
    {
      title: 'Nama Kasir',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Nomor HP',
      dataIndex: 'hp',
      key: 'hp',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Apakah Anda yakin ingin menghapus data ini?"
          onConfirm={() => handleDelete(record.kode_kasir)}
          okText="Ya"
          cancelText="Tidak"
        >
          <Button type="danger" size="small">
            Hapus
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <h2>View All Data Kasir</h2>
      <Table dataSource={kasirData} columns={columns} />
    </div>
  );
};

export default ViewAllKasir;
