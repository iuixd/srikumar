import Navbar from "./components/Navbar";
import About from "./components/About";
import UXCaseStudies from "./components/UXCaseStudies";
import GitHubPortfolio from "./components/GitHubPortfolio";
import Contact from "./components/Contact";
import videoBg from './assets/videoBg.mp4';
import myPhoto from './assets/myPhoto.png';

function App() {

  return (
    <>
      <div className="flex flex-col items-center relative">

        <div className="justify-center self-auto items-center w-full min-h-screen mt-0 flex static bg-[linear-gradient(to_bottom,_rgba(0,_192,_199,_0.5),_rgba(0,_192,_199,_0.5))]">
          <video src={videoBg} autoPlay loop muted className="-z-10 object-cover bg-[50%] bg-cover w-full h-full m-auto absolute"></video>

          <div className="text-white flex-col self-auto w-[760px]  h-auto flex static [text-shadow:0_0_1px_#151c1cf0]">
            <a href="#"><img src={myPhoto} className="w-24 h-24" /></a>
            <div className="font-bold font-bold text-[3.2em] leading-[1.1em] px-[0] py-4">Product designer, design leader and amateur developer<span className="text-turquoise-500">.</span></div>
            <div className="text-[1.4em] px-[0] py-4">I'm Srikumar, an experienced designer based in Bangalore, India. I am passionate about crafting user-centric and human-AI experiences, and I specialize in bringing bold ideas to life from concept to execution.</div>
          </div>
        </div>

        <Navbar />
      </div>

      <div className="neutral-100 w-full min-h-screen flex flex-col items-center justify-center bg-turquoise-300 backdrop-filter backdrop-blur-[21px]">
        Content
      </div>
    </>
  )
}

export default App
