import React from 'react'
import Product from '../../types/Product'

interface AdminProductProps {
    product: Product,
    setFormValues: (product: Product) => void,
    formValues: Product
}
const AdminProduct: React.FC<AdminProductProps> = ({ product, formValues, setFormValues }) => {

    const handleClick = () => {
        setFormValues({...formValues, id: product.id, title: product.title, price: product.price, description: product.description, category: product.category, image: product.image})
    }
    return (
        <>
            <div className="admin-product-container" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="admin-product-info">
                    <h2>{product.title}</h2>
                    <p>{product.price.toFixed(2)}€</p>
                </div>
                <button type="button" className="btn btn-primary admin-product-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleClick()}>Edit Product</button>
            </div>
        </>
    )
}

export default AdminProduct
