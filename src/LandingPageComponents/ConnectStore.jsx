import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './IconSpread.css';
import mainicon from '../assets/mainIcon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'


const IconSpread = () => {
  const [spread, setSpread] = useState(false);

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6]
  const handleScroll = () => {
    setSpread(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="icon-container">
      <motion.div
        className={`main-icon ${spread ? 'active' : ''}`}
        initial={{ scale: 1 }}
        animate={{ scale: spread ? 1.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <i className="main-icon-class"><img src={mainicon} alt="" /></i>
      </motion.div>
      <motion.div className={`icons ${spread ? 'spread' : ''}`}>
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            className="icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={spread ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <i className="icon-class"><img src={icon1} alt="" /></i>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IconSpread;
