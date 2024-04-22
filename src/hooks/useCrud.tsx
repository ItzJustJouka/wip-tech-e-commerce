import { useCallback, useEffect, useState } from 'react'
import Product from '../types/Product';

const useCrud = () => {
  const [products, setProducts] = useState<Product[]>([]);


  const fetchData = useCallback(async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts([...data.map((item: Product) => ({ ...item, quantity: 0 }))]);
  }, []);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getProducts = () => {
    fetchData();
  }

  const addProducts = async (product: Product) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}
      Error adding products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts((products) => [...products, data]);
    }
    catch (error) {
      console.log(error);
    }
  }

  const editProducts = async (product: Product) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}
      Error editing products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(products => products.map((prod) => prod.id === data.id ? data : prod));
    }
    catch (error) {
      console.log(error);
    }
  }

  const deleteProducts = async (product: Product) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${product.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}
      Error editing products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(products => products.filter((prod) => prod.id !== data.id));
    }
    catch (error) {
      console.log(error);
    }
  }

  return { products, setProducts, addProducts, getProducts, editProducts, deleteProducts };
}

export default useCrud;