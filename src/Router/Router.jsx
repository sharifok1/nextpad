import {createBrowserRouter} from "react-router-dom";
import HomePage from "../ApplicationPages/HomePage/HomePage";
import MinitPage from "../ApplicationPages/MinitPage/MinitPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mint",
    element:<MinitPage/>
  },
]);

export default router;