import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DesignLab from "./components/DesignLab";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; 

// Define layout with navbar
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/srikumar",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Default page at /srikumar
        element: <Home />,
      },
      {
        path: "/srikumar/about",
        element: <About />,
      },
      {
        path: "/srikumar/design-lab",
        element: <DesignLab />,
      },
      {
        path: "/srikumar/github",
        element: <GitHub />,
      },
      {
        path: "/srikumar/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
