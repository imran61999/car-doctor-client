import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Layout/Main";
import Home from "../src/pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;