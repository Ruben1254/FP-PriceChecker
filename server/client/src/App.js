import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AllProd } from './components/AllProd';
import { Category } from './components/Category';
import { Product } from './components/Product';
import { AddProduct } from './components/AddProduct';
import { UpdateProd } from './components/UpdateProd';
import { AboutUs } from './components/AboutUs';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<AllProd />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProd />} />
          <Route path='/aboutUs' element={<AboutUs />} />
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
