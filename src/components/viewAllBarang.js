import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
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

  const handleDelete = async (kode_barang) => {
    try {
      // Kirim permintaan DELETE ke server
      await axios.delete(`http://localhost:3001/barang/${kode_barang}`);
      
      // Perbarui data setelah penghapusan
      setBarangData(prevData => prevData.filter(barang => barang.kode_barang !== kode_barang));
      
      message.success('Data barang berhasil dihapus');
    } catch (error) {
      console.error('Error deleting data:', error.message);
      message.error('Gagal menghapus data barang');
    }
  };

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
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Apakah Anda yakin ingin menghapus?"
          onConfirm={() => handleDelete(record.kode_barang)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" size="small">
            Delete
          </Button>
        </Popconfirm>
      ),
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
