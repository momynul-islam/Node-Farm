import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { createContext, useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
        loader: async ({ params }) => {
          return params.id;
        },
      },
    ],
  },
]);

export const DATACONTEXT = createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <DATACONTEXT.Provider value={products}>
      <RouterProvider router={router}></RouterProvider>
    </DATACONTEXT.Provider>
  );
}

export default App;
