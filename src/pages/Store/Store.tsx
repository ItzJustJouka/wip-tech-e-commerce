import { useState } from 'react'
import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CartItems from '../../types/CartItems';
import CartProducts from '../../components/CartProducts/CartProducts';

const Store = () => {
    const { products } = useCrud();
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    return (
        <>
            <Header cartItems={cartItems} />
            <div className="d-flex flex-wrap w-100 justify-content-between">
                {products ? (
                    products.map((product: Product) => (
                        <Card key={product.id} item={product} setCartItems={setCartItems} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <CartProducts cartItems={cartItems} setCartItems={setCartItems}/>
        </>
    )
}

export default Store