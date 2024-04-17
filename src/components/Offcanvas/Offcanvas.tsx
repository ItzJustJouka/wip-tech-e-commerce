import React from 'react'
import CartItems from '../../types/CartItems'
import CartProducts from '../CartProducts/CartProducts'
import "./Offcanvas.css"

interface OffcanvasProps {
    cartItems: CartItems[],
    setCartItems: Function
}

const Offcanvas: React.FC<OffcanvasProps> = ({cartItems, setCartItems}) => {
    return (
        <>
            <div className="offcanvas cart-offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Your Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {cartItems.length ? (
                        <CartProducts cartItems={cartItems} setCartItems={setCartItems}/>
                    ) : (
                        <p>No items in your cart :|</p>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default Offcanvas