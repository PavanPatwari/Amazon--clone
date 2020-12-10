import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Boat/255/Boat_Gw_3000x1200._CB416191836_.jpg"
        alt=""
        />

        <div className="home__row">
          <Product
          id="12345"
          title="AirPods with Wireless Charging Case and True Bluetooth"
          price={249}
          rating={5}
          image="https://m.media-amazon.com/images/I/41ImsZy3u5L._AC_SR400,600_.jpg"/>

          <Product
          id="12346"
          title="Oppo F17 (Navy Blue, 6GB RAM, 128GB Storage)"
          price={17999}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81lDF673d9L._SX679_.jpg"/>
          {/* Product -> id, title, price, rating */}
          <Product
          id="12347"
          title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder"
          price={2449}
          rating={4}
          image="https://m.media-amazon.com/images/I/41lLtYqmC1L._AC_SR400,600_.jpg"/>
        </div>

        <div className="home__row">
          <Product
          id="12348"
          title="JSTOR P1 Portable Wireless Speaker"
          price={799}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41iXyRanDvL.jpg"/>

          <Product
          id="12349"
          title="VILLS LAURRENS Date and Day Analogue Watch for Men"
          price={1249}
          rating={5}
          image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY400_.jpg"/>

        </div>


    </div>
  );
}

export default Home;
