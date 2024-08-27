import React, { useEffect, useRef, useState } from "react";
import SlowType from "@/components/ui/SlowType";
import { useAnimation, motion } from "framer-motion";
import Cypher from "@/components/ui/CypherText";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/fmotion";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loopAnimation = async () => {
      while (isHovered) {
        await controls.start({
          y: 0,
          transition: { duration: 0.7 },
        });

        await controls.start({
          y: -10,
          transition: { duration: 0.7 },
        });
      }
    };

    loopAnimation();

    return () => {
      controls.stop();
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(false);
  };

  return (
    <div className="w-full flex h-fit flex-col items-center justify-start mt-10">
      <div className="w-10/12 h-fit flex flex-row justify-start items-center select-none">
        <motion.img
          initial="start"
          animate="end"
          variants={slideInFromLeft(0, 0.2)}
          className="mr-5 max-w-[100px] overflow-hidden hidden sm:block min-w-[100px] max-h-[100px] min-h-[100px] rounded-full bg-[#323232]"
          src="https://avatars.githubusercontent.com/u/86646466?v=4&size=248"
          alt="Profile Avatar"
        />
        <motion.span
          initial="start"
          animate="end"
          variants={slideInFromTop(0.2, 0.2)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-4xl font-bold flex-nowrap h-full justify-center items-center flex tracking-wider cursor-default"
        >
          Hey, I'm
          <div
            className={`text-4xl ml-2 mt-1 cursor-pointer font-black bg-clip-text ${isHovered ? "hidden" : "block"} pointer-events-none bg-gradient-to-br text-transparent from-purple-400 to-purple-950`}
          >
            STEIN
          </div>
          <motion.div
            animate={controls}
            initial={{ x: 0, y: 0 }}
            className={`text-4xl ml-2 mt-1 cursor-pointer font-black bg-clip-text ${isHovered ? "block" : "hidden"} pointer-events-none bg-gradient-to-br text-transparent from-purple-400 to-purple-950`}
          >
            DXBY
          </motion.div>
        </motion.span>
      </div>
      <motion.div
        initial="start"
        animate="end"
        variants={slideInFromRight(0.5, 0.2)}
        className="w-10/12 h-fit flex flex-col max-w-[700px] justify-start items-start mt-5"
      >
        <Cypher
          css="text-xl"
          text="a guy from germany who's self-taught in software and web development and loves Better call saul."
          randomInterval={1}
          revealInterval={30}
        />
      </motion.div>
    </div>
  );
};

export default Home;
