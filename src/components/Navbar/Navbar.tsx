import React, { useEffect } from 'react'
import Cart from '../Cart/Cart';
import CartItems from '../../types/CartItems';
import Searchbar from '../Searchbar/Searchbar';

interface NavbarProps {
  cartItems: CartItems[]
  setCartItems: Function
}
const Navbar: React.FC<NavbarProps> = ({ cartItems }) => {
  useEffect(() => {
    console.log("Navbar render");
  },[]);
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary flex-nowrap">
      <div className="container-fluid">
        <a className="navbar-brand" href={"/"}>
          <h5>Valvidia</h5>
        </a>
        <Searchbar />
        <Cart cartItems={cartItems} />
      </div>
    </nav>
  );
};

export default React.memo(Navbar)