import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RMortyApp from './RMortyApp';
import App from './App';
import SwapiContainer from './components/swapi/SwapiContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar2 from './components/NavBar2';
import Footer from './components/Footer';
import RickandMortyDetail from './components/RickandMorty/RickandMortyDetail';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { initializeApp } from "firebase/app";
import ProductsContainer from './components/desdefirebase/ProductsContainer';
import CartView from './components/shop/CartView';



const firebaseConfig = {
  apiKey: "AIzaSyCVyJ_vBUzvL_o58ijD1o063YZPKEBxM1I",
  authDomain: "reactmiproyectocolinferral.firebaseapp.com",
  projectId: "reactmiproyectocolinferral",
  storageBucket: "reactmiproyectocolinferral.appspot.com",
  messagingSenderId: "451774685739",
  appId: "1:451774685739:web:16c96d0d11885f99dc806e"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <NavBar2/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/swapi' element={<SwapiContainer/>}/>
      <Route path='/ram' element={<RMortyApp/>}/>
      <Route path='/ram/:id' element={<RickandMortyDetail/>}/>
      <Route path='/shop' element={<ItemListContainer/>}/>
      <Route path='/shop/item/:slug' element={<ItemDetailContainer/>}/>
      <Route path='/memo' element={<MemoContainer/>}/>
      <Route path='/products' element={<ProductsContainer/>}/>
      <Route path='/products/cart' element={<CartView/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
