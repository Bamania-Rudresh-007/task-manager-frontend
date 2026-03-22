import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./context/User.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRouter from "./components/ProtectedRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <ProtectedRouter><Dashboard /></ProtectedRouter>,
    },
]);

createRoot(document.getElementById("root")).render(
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>,
);
