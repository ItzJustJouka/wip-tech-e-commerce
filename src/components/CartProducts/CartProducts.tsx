import React from 'react'
import CartItems from '../../types/CartItems'
import CartProduct from '../CartProduct/CartProduct'
import "./CartProducts.css"

interface CartProductsProps {
    cartItems: CartItems[],
    setCartItems: Function
}
const CartProducts: React.FC<CartProductsProps> = ({ cartItems, setCartItems }) => {

    const removeFromCart = (index: number) => {
        setCartItems(((prev: CartItems[]) => prev.filter((_, i) => i !== index)))
    }

    return (
        <div className="cart-products__container">
            <div className="cart-products">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-product">
                        <CartProduct item={item} index={index} removeFromCart={removeFromCart} />
                    </div>
                ))}
            </div>
            <div className="cart-total-price">
                <p className={`cart-total-price__content  + ${cartItems.length === 0 ? "hidden" : ""}`} >Total Price: {cartItems.reduce((acc, item) => item.price + acc, 0).toFixed(2)}€</p>
            </div>
        </div>
    )
}

export default CartProducts