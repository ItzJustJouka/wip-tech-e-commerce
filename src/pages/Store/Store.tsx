import { useState } from 'react'
import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CartItems from '../../types/CartItems';
import CartProducts from '../../components/CartProducts/CartProducts';
import "./Store.css";
import Navbar from '../../components/Navbar/Navbar';
const Store = () => {
    const { products } = useCrud();
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    return (
        <>
            <Navbar></Navbar>
            <Header cartItems={cartItems} />
            <div className="cards__container">
                {products ? (
                    products.map((product: Product) => (
                        <Card key={product.id} item={product} setCartItems={setCartItems} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <CartProducts cartItems={cartItems} setCartItems={setCartItems} />
        </>
    )
}

export default Store