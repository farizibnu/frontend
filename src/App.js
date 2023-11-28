// src/App.js
import React from 'react';
import Barang from './components/FormInputBarang';
import FormUpdateBarang from './components/FormUpdateBarang';
import ViewAllBarang from './components/viewAllBarang';
// import Kasir from './components/Kasir';
// import Tenan from './components/Tenan';
// import Transaksi from './components/Transaksi';
// import Struk from './components/Struk';

function App() {
  return (
    <div className='card'>
      <Barang />
      <FormUpdateBarang/>
      <ViewAllBarang/>
      {/* <Kasir />
      <Tenan />
      <Transaksi />
      <Struk /> */}
    </div>
  );
}

export default App;
