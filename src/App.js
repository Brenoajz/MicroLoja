import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Produto from './pages/Produto/Produto';
import Sobre from './pages/Sobre/Sobre'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='/produtos' element={<Produto/>} />
        <Route path='/sobre' element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
