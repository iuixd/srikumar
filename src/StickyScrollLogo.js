import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import myPhoto from './assets/myPhoto.png';

const StickyScrollLogo = () => {
  const logoRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!logoRef.current) return;
      const logoTop = logoRef.current.getBoundingClientRect().top;

      if (logoTop <= 20 && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY === 0) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

};

export default StickyScrollLogo;