import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const ref = React.useRef(null);

  return (
    <nav className="fixed z-100 top-0 self-auto w-full">
      <div className="flex justify-between justify-center self-auto items-center mt-2 mb-2">
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}

          className="realtive flex items-center w-fit h-[auto] px-4 flex-shrink-0 rounded-[8px] font-medium border-[1px] border-[solid] border-[_rgba(255,_255,_255,_0.20)] border-opacity-90 bg-[linear-gradient(153deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(255,_255,_255,_0.00)_100%)] backdrop-filter backdrop-blur-[21px]"
                x-bind:class="{'bg-[linear-gradient(153deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(255,_255,_255,_0.00)_100%)]': !scrolledFromTop, 'bg-[linear-gradient(153deg,_rgba(255,_255,_255,_0.80)_0%,_rgba(255,_255,_255,_0.00)_100%)]': scrolledFromTop}" x-transition>
          <li ref={ref} 
              onMouseEnter={() => {

                setPosition({
                  width: "67px",
                  opacity: 0.40,
                  left: "16px",
                });
              }}
              setPosition={setPosition} className="relative z-100 mr-3 px-3 py-4 text-sm font-medium text-turquoise-900 cursor-pointer"><a href="#hero">About</a></li>
          <li ref={ref} 
              onMouseEnter={() => {
                setPosition({
                  width: "77px",
                  opacity: 0.40,
                  left: "95px",
                });
              }} setPosition={setPosition} className="relative z-100 mr-3 px-3 py-4 text-sm font-medium text-turquoise-900 cursor-pointer"><a href="#hero">Articles</a></li>
          <li ref={ref}
              onMouseEnter={() => {
                setPosition({
                  width: "72px",
                  opacity: 0.40,
                  left: "183px",
                });
              }} setPosition={setPosition} className="relative z-100 mr-3 px-3 py-4 text-sm font-medium text-turquoise-900 cursor-pointer"><a href="#github-portfolio">GitHub</a></li>
          <li ref={ref}
              onMouseEnter={() => {
                setPosition({
                  width: "81px",
                  opacity: 0.40,
                  left: "267px",
                });
              }} setPosition={setPosition} className="relative z-100 px-3 py-4 text-sm font-medium text-turquoise=900 cursor-pointer"><a href="#contact">Contact</a></li>
          <Cursor position={position} />
        </ul>
      </div>
    </nav>
  )
}

const Cursor = ({position}) => {
  return <motion.li
    animate={position} 
    className="absolute z-99 h-7 w-36 mx-auto rounded-full bg-white"
  />
}

export default Navbar