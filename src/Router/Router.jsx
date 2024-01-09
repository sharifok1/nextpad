import {createBrowserRouter} from "react-router-dom";
import HomePage from "../ApplicationPages/MintPage/MintPage";
import MainPage from "../ApplicationPages/MainPage/MainPage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainPage/>
  },
  {
    path: "/mint",
    element: <HomePage />,
  },
  
]);

export default router;