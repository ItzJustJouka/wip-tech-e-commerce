import React, { useEffect, useState } from 'react';
import Product from '../../types/Product';
import Card from './../../components/Card/Card';

type CartProps = {
    price: number,
    products: []
}

const Cart = ({price, products}: CartProps) => {

    const [totQuantity, setTotQuantity] = useState<number>(0)
    const [totPrice, setTotPrice] = useState<number>(0);

    useEffect(() => {
        setTotQuantity(products.reduce((acc: number, products: any) => acc + products.quantity, 0));
        setTotPrice(products.reduce((acc: number, products: Product)=> acc + products.price * products.quantity, 0));
      }, [products])
    
    

  return (

         <div className="container_cart_quantity">
        <div className={totQuantity === 0 ? "hidden" : ""}>{`${price.toFixed(2)}€`}</div>
        <div className="cart-container">
            <img className="cart" src="cart.png" alt="Cart"></img>
        </div>
        <div className={`cart-container_tot ${totQuantity === 0 ? "hidden" : ""}`}>{totQuantity === 0 ? "" : totQuantity}</div>
        </div>
  );
}

export default Cart;