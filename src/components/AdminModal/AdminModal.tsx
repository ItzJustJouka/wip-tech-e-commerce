import React, { useState } from 'react'
import "./AdminModal.css"
import Product from '../../types/Product'

interface AdminModalProps {
    formValues: Product
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    editProducts: Function
    getProducts: Function,
    setFormValues: Function,
    deleteProducts: Function
}
const AdminModal: React.FC<AdminModalProps> = ({ formValues, handleChange, editProducts, getProducts, setFormValues, deleteProducts }) => {
    const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editProducts(formValues);
        getProducts();
    }

    const handleCancel = () => {
        setFormValues({ id: 0, title: '', price: 0, description: '', category: '', image: '' })
    }

    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title edit-product-modal__title" id="staticBackdropLabel">Edit Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
                    </div>
                    <div className="modal-body">
                        {!isDeleting ? (
                            <div className="form-container mb-3">
                                <form className="edit-product-modal__form" onSubmit={handleEdit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Title" value={formValues.title}
                                            onChange={handleChange} />
                                        <label htmlFor="floatingInput">Title</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" onChange={handleChange} name="price" className="form-control" id="floatingInput" placeholder="Price" value={formValues.price} />
                                        <label htmlFor="floatingInput">Price (€)</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            onChange={handleChange}
                                            name="description"
                                            className="form-control" id="floatingInput" placeholder="description" value={formValues.description} />
                                        <label htmlFor="floatingInput">Description</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={handleChange}
                                            name="category"
                                            className="form-control" id="floatingInput" placeholder="category" value={formValues.category} />
                                        <label htmlFor="floatingInput">Category</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput"
                                            name="image" onChange={handleChange} placeholder="image" value={formValues.image} />
                                        <label htmlFor="floatingInput">Image URL</label>
                                    </div>
                                    <div className="modal-footer modal-buttons">
                                        <button className="delete-button btn btn-danger" onClick={() => setIsDeleting(!isDeleting)}>Delete Product</button>
                                        <div className="button-section">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>Close</button>
                                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Confirm Edit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="delete-confirm-prompt__wrapper">
                                <h5>Are you sure you want to delete this product?</h5>
                                <p className="delete-prompt__disclaimer">This action is irreversible and may lead to serious consequences!</p>
                                <div className="button-section">
                                    <button type="button" className="btn btn-secondary" onClick={() => setIsDeleting(!isDeleting)}>Cancel</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteProducts(formValues)}>Confirm Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminModal
