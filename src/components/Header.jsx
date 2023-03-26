import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <motion.div className='font-bold text-2xl p-8 text-white'
      initial={{y:-250}}
      animate={{y:-10}}
      transition={{delay:0.2, type:'spring', stiffness:120}}
      >
        Pizza Joint
      </motion.div>
    </header>
  );
}

export default Header