import { motion } from 'framer-motion';

const EnterScreen = ({ onEnter }) => {
  return (
    <div id="enter-screen" onClick={onEnter}>
      <motion.h1
        initial={{ opacity: 0.4, scale: 0.98 }}
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [0.98, 1.03, 0.98],
          textShadow: [
            "0 0 10px orange",
            "0 0 45px orange",
            "0 0 10px orange"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        [ CLICK TO ENTER ]
      </motion.h1>
    </div>
  );
};

export default EnterScreen;
