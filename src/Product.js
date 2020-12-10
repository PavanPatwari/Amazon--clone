import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, price, image, rating, title}) {

  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
        dispatch({
          type : 'ADD_TO_BASKET',
          item: {
            id : id,
            title : title,
            image: image,
            rating: rating,
            price: price
          },
        });
  };

  return (
    <div className="product">
      <div className="product__info">
      <p> {title} </p>
      <p className="product__price">
      <small>₹</small>
      <strong>{price}</strong>
      </p>
      <div className="product__rating">
          {
            Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
          }
      </div>
      </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}> Add to cart </button>
    </div>
  )
}

export default Product;
