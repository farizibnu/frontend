import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const ViewAllBarang = () => {
  const [barangData, setBarangData] = useState([]);

  useEffect(() => {
    // Fetch data barang
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/barang');
        setBarangData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Kode Barang',
      dataIndex: 'kode_barang',
      key: 'kode_barang',
    },
    {
      title: 'Nama Barang',
      dataIndex: 'nama_barang',
      key: 'nama_barang',
    },
    {
      title: 'Satuan',
      dataIndex: 'satuan',
      key: 'satuan',
    },
    {
      title: 'Harga Satuan',
      dataIndex: 'harga_satuan',
      key: 'harga_satuan',
    },
    {
      title: 'Stok',
      dataIndex: 'stok',
      key: 'stok',
    },
  ];

  return (
    <div>
      <h2>View All Data Barang</h2>
      <Table dataSource={barangData} columns={columns} />
    </div>
  );
};

export default ViewAllBarang;
