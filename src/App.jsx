<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Owner from "./pages/Owner";
import Home from "./pages/Home";
import Layout from "./components/Layout";


  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found </h1>
      </div>
      ),
      children: [
        {path: "/", element: <Home />},
        {path: "/Owner", element: <Owner/>}
      ],
      },

  ]);
  export default function App () {
  return (
    <RouterProvider router={router} />
  )
=======
export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-rose-100">

    </div>
  );
>>>>>>> main
}
