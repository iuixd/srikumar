import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import GitHubPortfolio from "./components/GitHub";
import Contact from "./components/Contact";
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

function App() {

  return <div><Home /></div>
}

export default App
