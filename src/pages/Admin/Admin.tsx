import React, { useState } from 'react';
import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import "./Admin.css"

const Admin = () => {
  interface FormValues {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
      rate?: number
      count?: number
    }
  }

  const { products, addProducts, getProducts } = useCrud();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "number" ? parseFloat(value) : value
    });
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProducts({ ...formValues, id: products.length + 1});
    setIsEditing(true);
    getProducts();
  }

  return (
    <>
      {!isEditing ? (
        <div className="admin-products-container">
          {products.map((product: Product) => (
            <div className="admin-product-container" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="admin-product-info">
                <h2>{product.title}</h2>
                <p>{product.price.toFixed(2)}€</p>
              </div>
            </div>
          ))}
          <div className="add-product-div admin-product-container" onClick={() => setIsEditing(!isEditing)}>
            <div className="product-div__content">
              <p>Add</p>
              <p><span className="plus">+</span></p>
              <p>Product</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="editing-interface d-flex flex-column align-items-center p-4">
          <h3>New Product</h3>
          <form className="new-product-form d-flex flex-column w-25" onSubmit={handleSubmit}>
            <label htmlFor="new-product-title">Title</label>
            <input type="text" name="title" id='new-product-title' value={formValues.title} onChange={handleChange} />

            <label htmlFor="new-product-img">Image URL</label>
            <input type="text" name="image" id='new-product-img' value={formValues.image} onChange={handleChange} />

            <label htmlFor="new-product-description">Description</label>
            <input type="text" name="description" id='new-product-description' value={formValues.description} onChange={handleChange} />

            <label htmlFor="new-product-category">Category</label>
            <input type="text" name="category" id='new-product-category' value={formValues.category} onChange={handleChange} />

            <label htmlFor="new-product-price">Price</label>
            <input type="number" name="price" id='new-product-price' value={formValues.price} onChange={handleChange} />

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <button className="btn btn-secondary mt-5" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default Admin;
