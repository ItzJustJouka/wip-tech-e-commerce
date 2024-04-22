import "./Card.css";
import Product from "../../types/Product";
import CartItems from "../../types/CartItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
    item: Product,
    setCartItems: Function,
}
const Card = ({ item, setCartItems }: CardProps) => {

    const addToCart = (product: Product) => {
        setCartItems((prev: CartItems[]) => {
            return [...prev, { ...product }];
        })
    }

    return (
        <div className="card product-card product" style={{ backgroundImage: "linear-gradient(to bottom right, #FFFFFF 0%, #DFDFEF 100%)" }}>
            <a href={`/product/${item.id}`}>
                <div className="card-img-container">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                </div>
            </a>
            <div className="card-body">

                <h5 className="card-title truncate" id="product-name" >
                    <a href={`/product/${item.id}`}>{item.title}</a>
                </h5>

                <p className="card-text" id="product-category">{item.category.split("").map((c, index) => index === 0 ? c.toUpperCase() : c).join("")}</p>
                <div className="rating-container">
                    <p className="card-text" id="product-rate__rating">{Array.from({ length: 5 }).map((_, i) => (item.rating && item.rating.rate) && Math.floor(item.rating.rate) > i ? <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFD43B" }} /> : <FontAwesomeIcon key={i} icon={faStar} />)}</p>
                    <p className="card-text" id="product-rate__count">{item.rating && item.rating.count}</p>
                </div>
                <div className="prod-quantity d-flex justify-content-center my-2">
                    <div className="add-to-cart__btn-container d-flex pb-2">
                        <button className="btn btn-warning add-to-cart__btn" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                </div>
                <p className="price">{`${item.price && item.price.toFixed(2)}€`}</p>
            </div>
        </div>
    );
};

export default Card