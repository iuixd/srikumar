import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; // Import your navbar
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();

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
        path: "about",
        element: <About />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "github",
        element: <GitHub />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
