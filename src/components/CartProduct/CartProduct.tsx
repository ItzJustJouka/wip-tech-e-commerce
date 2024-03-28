import React from 'react'
import CartItems from '../../types/CartItems'

interface CartProductProps {
    item: CartItems,
    index: number,
    removeFromCart: Function
}

const CartProduct: React.FC<CartProductProps> = ({ item, index, removeFromCart }) => {
    return (
        <>
            <div className="cart-product-info">
                <div className="cart-product-image__container">
                    <img className="cart-product-image" src={item.image} alt={item.image} />
                </div>
                <div className="cart-product-details">
                    <div className="cart-product-title__container">
                        <h3 className="cart-product-title">{item.title}</h3>
                    </div>
                    <div className="cart-product-category__container">
                        <p className="cart-product-category">{item.category}</p>
                    </div>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
            </div>
            <div className="cart-product-price__container">
                <p className="cart-product-price">{item.price.toFixed(2)}€</p>
            </div>
        </>
    )
}

export default CartProduct