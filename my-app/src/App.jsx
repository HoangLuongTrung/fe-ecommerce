import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // children: [
    //   {
    //     path: "/login",
    //     element: <LoginPage />,
    //   },
    // ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
