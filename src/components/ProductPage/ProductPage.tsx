import React, { useEffect, useState } from 'react'
import Product from '../../types/Product'
import "./ProductPage.css"
import Navbar from '../Navbar/Navbar'
import CartItems from '../../types/CartItems'
import Offcanvas from '../Offcanvas/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface ProductPageProps {
  id?: number
  cartItems: CartItems[],
  setCartItems: Function
}
const ProductPage = ({ id, cartItems, setCartItems }: ProductPageProps) => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
  useEffect(() => {
    if(!id) {
      id = Number(window.location.pathname.split("/").slice(-1)[0]);
    }
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/products/" + id);
      const data = await response.json();
      setCurrentProduct(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Offcanvas cartItems={cartItems} setCartItems={setCartItems} />
      {currentProduct && (
        <div className="product-page__wrapper">
          <div className="product-page__image-container">
            <img className="product-page__image" src={currentProduct.image} alt={currentProduct.title} />
          </div>
          <div className="product-page__info">
            <h3 className="product-page__title">{currentProduct.title}</h3>
            <div className="rating-container">
              <p className="card-text" id="product-rate__rating">{Array.from({ length: 5 }).map((_, i) => (currentProduct.rating && currentProduct.rating.rate) && Math.floor(currentProduct.rating.rate) > i ? <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFD43B" }} /> : <FontAwesomeIcon key={i} icon={faStar} style={{ color: "rgba(0, 0, 0, 0.3)" }} />)}</p>
              <p className="card-text" id="product-rate__count">{currentProduct.rating && currentProduct.rating.count}</p>
            </div>
            <p className="product-page__category">{currentProduct.category}</p>
            <p className="product-page__description">{currentProduct.description}</p>
            <div className="product-page__add-to-cart__btn-container">
              <p className="product-page__price">€{currentProduct.price}</p>
              <button className="btn btn-warning add-to-cart__btn" onClick={() => setCartItems((prev: CartItems[]) => [...prev, { ...currentProduct }])}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}


    </>
  )
}

export default ProductPage
