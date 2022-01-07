import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './component2/Home'
import { Products } from './component2/Products'
import { Product } from './component2/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}


export default App;
