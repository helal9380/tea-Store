/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddTea from "../Pages/AddTea/AddTea";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h3>Error page</h3>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addTea',
            element: <AddTea></AddTea>
        },
    ]
  },
]);

export default router;
