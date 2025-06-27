
import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./components/Home";
import About from "./components/About";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Alpine from 'alpinejs'
import NotFound from "./components/NotFound";

 
window.Alpine = Alpine
 
Alpine.start()

const router = createBrowserRouter([
  {
    path : "/srikumar",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path : "/srikumar/about",
    element: <About />,
  },
  {
    path : "/srikumar/github",
    element: <GitHub />,
  },
  {
    path : "/srikumar/contact",
    element: <Contact />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

function App() {

  return <div><Home /></div>

}

export default App
