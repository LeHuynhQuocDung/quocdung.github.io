import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Product';
import ProductE from './component/ProductE';
import Footer from './component/Footer';
import Cart from './component/Cart';
import { useState } from 'react';

;
function App() {
 // list product
  const [listProduct, setListProduct] = useState([]);
  // lay product tu productE
  const thanhToan = (product) => {
    // them product vo list
    if (listProduct.findIndex(p => p.id === product.id) === -1) {
      setListProduct([...listProduct, product]);
    } else {
      alert('da co san pham trong gio hang');
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/products/:id' element={<ProductE thanhToan={thanhToan} />} />
        <Route path='/Cart' element={<Cart listProduct={listProduct}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
