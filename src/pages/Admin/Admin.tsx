import React, { useEffect, useState } from 'react';
import useCrud from '../../hooks/useCrud';
import Product from '../../types/Product';
import "./Admin.css"
import User from '../../types/User';
import AdminProduct from '../../components/AdminProduct/AdminProduct';
import AdminModal from '../../components/AdminModal/AdminModal';

interface AdminProps {
  setIsLoggedIn: Function
  user: User
}
const Admin: React.FC<AdminProps> = ({ setIsLoggedIn, user }) => {
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

  const { products, addProducts, getProducts, editProducts, deleteProducts } = useCrud();
  const [isAdding, setIsAdding] = useState<boolean>(false);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addProducts({ ...formValues, id: products.length + 1 });
    getProducts();
    setIsAdding(false);
  }

  return (
    <>
      {!isAdding ? (
        <div className="admin-page__wrapper">
          <div className="admin-products-container">
            <AdminModal formValues={formValues} handleChange={handleChange} getProducts={getProducts} setFormValues={setFormValues} editProducts={editProducts} deleteProducts={deleteProducts} />
            {products.map((product: Product, index: number) => (
              <AdminProduct product={product} key={index} formValues={formValues} setFormValues={setFormValues} />
            ))}
            <div className="add-product-div admin-product-container" onClick={() => setIsAdding(!isAdding)}>
              <div className="product-div__content">
                <p>Add</p>
                <p><span className="plus">+</span></p>
                <p>Product</p>
              </div>
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
          <button className="btn btn-secondary mt-5" onClick={() => setIsAdding(!isAdding)}>Cancel</button>
        </div>
      )}
      <div className="logout-button__container d-flex justify-content-center">
        <button className="logout-button btn btn-danger" onClick={() => setIsLoggedIn(null)}>Logout</button>
      </div>
    </>
  );
}

export default Admin;
