import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Store from "../pages/Store/Store";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Store />,
        },
        {
            path: "/login",
            element: <Login />,
        }
    ]
    )
    return <RouterProvider router={router} />
}
export default Router