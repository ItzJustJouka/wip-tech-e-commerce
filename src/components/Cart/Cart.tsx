import CartItems from '../../types/CartItems';
import "./Cart.css"

interface CartProps {
  cartItems: CartItems[],
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <>
      <div className="container_cart_price d-flex align-items-center">
        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <div className="cart-container">
            <img className="cart" src="/assets/cart.png" alt="Cart" style={{ width: "50px" }} />
            <div className={`cart-container_tot ${!cartItems.length ? "hidden" : ""}`}>
              {!cartItems.length ? "" : cartItems.length}
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Cart;
