import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Store from "../pages/Store/Store";
import { useEffect, useState } from "react";
import ProductPage from "../components/ProductPage/ProductPage";
import CartItems from "../types/CartItems";

const Router = () => {

    const [cartItems, setCartItems] = useState<CartItems[]>([])

    useEffect(() => {
        const items = localStorage.getItem("cartItems");
        setCartItems(items ? JSON.parse(items) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Store cartItems={cartItems} setCartItems={setCartItems} />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/product/:id",
            element: <ProductPage cartItems={cartItems} setCartItems={setCartItems} />,
        }
    ]
    )
    return <RouterProvider router={router} />
}

export default Router