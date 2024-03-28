import CartItems from '../../types/CartItems';
import "./Cart.css"
import Offcanvas from '../Offcanvas/Offcanvas';

interface CartProps {
  cartItems: CartItems[]
  setCartItems: Function;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Offcanvas cartItems={cartItems} setCartItems={setCartItems}/>

      <div className="container_cart_price d-flex align-items-center">
        <div className={!cartItems.length ? "hidden" : ""}>
          {`${cartItems.reduce((tot, product) => tot + product.price, 0).toFixed(2)}€`}
        </div>
        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <div className="cart-container">
            <img className="cart" src="cart.png" alt="Cart" style={{ width: "50px" }} />
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
