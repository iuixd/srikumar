
import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./components/Home";
import About from "./components/About";
import GitHubPortfolio from "./components/GitHub";
import Contact from "./components/Contact";
import Alpine from 'alpinejs'
import NotFound from "./components/NotFound";

 
window.Alpine = Alpine
 
Alpine.start()

const router = createBrowserRouter([
  {
    path : "/srikumar-portfolio",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path : "/srikumar-portfolio/about",
    element: <About />,
  },
  {
    path : "/srikumar-portfolio/github",
    element: <GitHubPortfolio />,
  },
  {
    path : "/srikumar-portfolio/contact",
    element: <Contact />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App
