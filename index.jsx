import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  }
  
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
