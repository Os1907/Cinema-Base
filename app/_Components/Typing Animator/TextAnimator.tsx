'use client'
import { motion } from 'framer-motion';

const MovingText = () => {
  const textVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { duration:10, ease: 'linear',repeat: Infinity, repeatType: 'loop',} },
  };

  return (

    <motion.div
      className="text-white text-xl"
      initial="hidden"
      // animate="visible"
      animate="active"
      variants={textVariants}
    >
      We recommend you to choose a different link if the movie does not work. Thank you!
    </motion.div>
  );
};

export default MovingText;
