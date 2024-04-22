import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import Card from '../../components/Card/Card';
import CartItems from '../../types/CartItems';
import "./Store.css";
import Navbar from '../../components/Navbar/Navbar';
import Offcanvas from '../../components/Offcanvas/Offcanvas';

interface StoreProps {
    cartItems: CartItems[], 
    setCartItems: Function,
}
const Store = ({ cartItems, setCartItems }: StoreProps) => {
    const { products } = useCrud();

    return (
        <div className="main__wrapper">
            <Navbar cartItems={cartItems} setCartItems={setCartItems} />
            <Offcanvas cartItems={cartItems} setCartItems={setCartItems} />
            <div className="cards__container">
                {products ? (
                    products.map((product: Product) => (
                        <Card key={product.id} item={product} setCartItems={setCartItems} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Store