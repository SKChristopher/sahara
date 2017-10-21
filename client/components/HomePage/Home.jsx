import React from 'react';

import Header from './../Header';
import Search from './Search';
import ImageSlider from './ImageSlider';
import Products from './Products';
import Cart from './Cart';


const Home = () => (
  <div id="home-container">
    <Header />
    <Search />
    <ImageSlider />
    <Products />
    <Cart />
  </div>
);

export default Home;
