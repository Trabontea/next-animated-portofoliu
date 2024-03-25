'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  const text = 'Hello';
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:x-1/2">
          <motion.div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/* FORM CONTAINER */}
        <form className="h-1/2 lg:h-full lg:x-1/2"></form>
      </div>
    </motion.div>
  );
}
