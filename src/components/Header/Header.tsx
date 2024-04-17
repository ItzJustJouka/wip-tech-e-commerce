import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Cart from '../Cart/Cart';
import CartItems from '../../types/CartItems';
import "./Header.css"

interface HeaderProps {
  cartItems: CartItems[];
  setCartItems: Function;
}
const Header: React.FC<HeaderProps> = ({ cartItems, setCartItems }) => {

  return (
    <div className="d-flex justify-content-between header">
      <Searchbar />
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default Header;
