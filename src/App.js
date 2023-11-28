// src/App.js
import React from 'react';
import Barang from './components/FormInputBarang';
import FormUpdateBarang from './components/FormUpdateBarang';
import ViewAllBarang from './components/viewAllBarang';
import FormInputKasir from './components/FormInputKasir';
import FormUpdateKasir from './components/FormUpdateKasir';
import ViewAllKasir from './components/viewAllKasir';
import FormInputTenan from './components/FormInputTenan';
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
      <FormInputKasir/>
      <FormUpdateKasir/>
      <ViewAllKasir/>
      <FormInputTenan/>
      {/* <Kasir />
      <Tenan />
      <Transaksi />
      <Struk /> */}
    </div>
  );
}

export default App;
