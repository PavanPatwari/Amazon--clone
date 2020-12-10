import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";
import './Checkout.css';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";


function Checkout() {

  const [{basket}] = useStateValue();

  return (
    <div className="checkout">

    <div className="checkout__left">
    <div className="checkout__adText">
      <p><strong>Pay faster for all your shopping needs <span className="checkout__text">with Amazon Pay balance</span></strong></p>
      <p>Get Instant refund on cancellations | Zero payment failures</p>
    </div>
    {basket?.length === 0 ? (
      <div>
        <h3>Add items to cart..</h3>
      </div>
    ) : (
      <div>
        <h3 className="checkout__title"> Your shopping Basket </h3>
        {/* List out all of the added products*/}
        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}

      </div>
    )}
    </div>
      {basket.length > 0 && (
        <div className="checkout__right">
            <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
