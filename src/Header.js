import React from 'react';
import Logo from './AmazonLogo.png';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{basket}] = useStateValue();

  console.log(basket);

  return (
        <nav className="header">
            {/*Amazon Logo*/}
            <Link to="/">
              <img className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              />
            </Link>

            {/*Search Field and Icon*/}
            <div className="header__search">
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon" />
            </div>

            {/*Link 1 - Hello sign In*/}
          <div className="header__nav">
              <Link to="/login" className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Hello,</span>
                  <span className="header__optionLineTwoo">Sign In</span>
                </div>
              </Link>
          </div>

          {/*Link 2 - Returns & Orders*/}
          <div className="header__nav">
              <Link to="/" className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwoo">& Orders</span>
                </div>
              </Link>
          </div>

          {/*Link 3 - Your Prime*/}
          <div className="header__nav">
              <Link to="/" className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwoo">Prime</span>
                </div>
              </Link>
          </div>

          {/* Basket Icon with Count */}
          <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                {/* Basket Icon */}
                <ShoppingBasketIcon />
                {/* Number of items in basket */}
                <span className="header__optionLineTwoo header__basketCount">{ basket?.length }</span>
              </div>
          </Link>
        </nav>
  )
}

export default Header;
