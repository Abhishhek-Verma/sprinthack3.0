import { useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';
import fourth from '../assets/4.png';
import fifth from '../assets/5.png';
import sixth from '../assets/6.png';

const popUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      delay: 1 + i * 0.3,
    },
  }),
};

export default function HeroSection() {
  
  const [textIndex, cycleText] = useCycle(0, 1);


  useEffect(() => {
    const interval = setInterval(() => {
      cycleText(); // cycles between 0 and 1
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, [cycleText]);

  //for main heading animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const texts = [
    {
      text: (
        <motion.h1
          key="text2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 75 }}
          exit={{ opacity: 0, y: 75 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-8xl font-bold absolute top-10 md:top-0 text-center z-30 px-4"
        >
          The <span className="text-green-400">Civic</span> Platform.
        </motion.h1>
      ),
    },
    {
      text: (
        <motion.h1
      className="absolute top-[1rem] text-2xl md:text-5xl font-extrabold text-center z-30 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[
        "Start with one let others join",
        "for the right cause in",
        "right ways on the right platform",
      ].map((line, index) => (
        <motion.h1 key={index} variants={lineVariants}>
          {line}
        </motion.h1>
      ))}
    </motion.h1>
      ),
    },
    
  ];

  return (
    <div className="relative h-[83vh] w-full  bg-white text-black flex flex-col items-center justify-center overflow-hidden">
      {/* Headline */}
      {texts[textIndex].text}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={first} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={second} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute right-[2rem] bottom-[-2rem] w-[30vw] z-20"
      >
        <img
          src={second} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute right-[8rem] bottom-[0rem] w-[30vw] z-10"
      >
        <img
          src={second} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={third} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute left-[-2rem] bottom-[-2rem] w-[30vw] z-10"
      >
        <img
          src={third} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7, delay: 2 }}
        className="absolute left-[-2rem] bottom-0 w-[30vw] z-8"
      >
        <img
          src={sixth} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7, delay: 2 }}
        className="absolute left-[10rem] bottom-0 w-[30vw] z-8"
      >
        <img
          src={sixth} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 2 }}
        className="absolute left-[15rem] bottom-0 w-[30vw] z-8"
      >
        <img
          src={sixth} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 2 }}
        className="absolute left-[20rem] bottom-0 w-[30vw] z-8"
      >
        <img
          src={sixth} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 2 }}
        className="absolute left-[28rem] bottom-0 w-[30vw] z-8"
      >
        <img
          src={sixth} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute left-2 bottom-0 w-[30vw] z-10"
      >
        <img
          src={third} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute left-[10rem] bottom-4 w-[30vw] z-10"
      >
        <img
          src={third} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute left-[20rem] bottom-[-10px] w-[30vw] z-10"
      >
        <img
          src={third} 
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={fourth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 right-0 w-[30vw] z-10"
      >
        <img
          src={fifth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 right-[3rem] w-[30vw] z-10"
      >
        <img
          src={fifth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 right-[12rem] w-[30vw] z-10"
      >
        <img
          src={fifth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 right-[18rem] w-[30vw] z-10"
      >
        <img
          src={fifth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 right-[24rem] w-[30vw] z-10"
      >
        <img
          src={fifth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 right-[29rem] w-[30vw] z-10"
      >
        <img
          src={fifth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    </div>
  );
}
