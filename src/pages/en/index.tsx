import React, { useEffect, useRef, useState, type ReactNode } from "react";
import SlowType from "@/components/ui/SlowType";
import { useAnimation, motion } from "framer-motion";
import Cypher from "@/components/ui/CypherText";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/fmotion";
import {
  FaDiscord,
  FaGit,
  FaGithub,
  FaIdCardClip,
  FaInbox,
  FaMailchimp,
} from "react-icons/fa6";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [imgError, setImgError] = useState(false);

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
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] flex h-fit flex-col items-center justify-start mt-10">
        <div className="w-10/12 h-fit flex flex-row justify-start items-center select-none">
          <motion.img
            initial="start"
            animate="end"
            variants={slideInFromLeft(0, 0.2)}
            alt="Profile Avatar"
            className={`mr-5 max-w-[100px] overflow-hidden hidden sm:block min-w-[100px] max-h-[100px] min-h-[100px] rounded-full bg-[#323232] ${
              imgError ? "hidden sm:hidden" : ""
            }`}
            src="https://avatars.githubusercontent.com/u/86646466?v=4&size=248"
            onError={() => setImgError(true)}
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
          className="w-10/12 h-fit flex flex-col justify-start items-start mt-5"
        >
          <span className="h-[100px]">
            <Cypher
              css="text-xl max-w-[700px]"
              text="a guy from germany who's self-taught in software and web development and loves Better call saul."
              randomInterval={1}
              revealInterval={30}
            />
          </span>
        </motion.div>
        <motion.div
          initial="start"
          animate="end"
          variants={slideInFromLeft(0.7, 0.2)}
          className="mt-5 w-10/12 h-fit flex justify-start items-center"
        >
          <span className="text-3xl relative w-full text-start font-bold tracking-wide text-nowrap">
            <SlowType text="Contact me" typingSpeed={8000} />
            <span className="absolute left-0 rotate-3 hover:-rotate-3 transition-all duration-75 ease-in-out cursor-pointer text-purple-400 bg-[#191919] text-center w-fit h-fit">
              <SlowType text="Contact me " typingSpeed={14000} />
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.75 }}
              className="h-[2px] bg-purple-400 rounded-full mt-3"
            />
          </span>
        </motion.div>
        <div className="mt-2 w-10/12 h-fit flex flex-row items-center justify-start gap-2 flex-wrap">
          <motion.div
            initial="start"
            animate="end"
            variants={slideInFromBottom(0.7, 0.2)}
            className="w-full"
          >
            <Contact
              url="https://github.com/IamSTEINI/IamSTEINI"
              value="IamSTEINI"
            >
              <FaGithub size={32} />
              <span className="group-hover:opacity-100 opacity-0 group-hover:w-[80px] w-[0px] transition-all ease-in duration-100">
                Github
              </span>
            </Contact>
          </motion.div>
          <motion.div
            initial="start"
            animate="end"
            variants={slideInFromBottom(1, 0.2)}
            className="w-full"
          >
            <Contact url="https://discord.com/" value="dxby">
              <FaDiscord size={32} />
              <span className="group-hover:opacity-100 opacity-0 group-hover:w-[80px] w-[0px] transition-all ease-in duration-100">
                Discord
              </span>
            </Contact>
          </motion.div>
          <motion.div
            initial="start"
            animate="end"
            variants={slideInFromBottom(1.3, 0.2)}
            className="w-full"
          >
            <Contact url="mailto:stein@dxby-dev" value="stein@dxby.dev">
              <FaIdCardClip size={32} />
              <span className="group-hover:opacity-100 opacity-0 group-hover:w-[100px] w-[0px] transition-all ease-in duration-100">
                Email
              </span>
            </Contact>
          </motion.div>
          <motion.div
            initial="start"
            animate="end"
            variants={slideInFromBottom(1.6, 0.2)}
            className="w-full"
          >
            <Contact url="/public_key.txt" value="xsBNBGbPa...">
              <FaInbox size={32} />
              <span className="group-hover:opacity-100 opacity-0 group-hover:w-[80px] w-[0px] transition-all ease-in duration-100">
                PGP KEY
              </span>
            </Contact>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home;

interface ContactProps {
  url: string;
  value: string;
  children?: ReactNode;
}

const Contact: React.FC<ContactProps> = ({ url, value, children }) => {
  return (
    <a
      href={url}
      className="p-2 select-none bg-[#212121] flex h-[60px] w-full group sm:w-fit min-w-[230px] sm:h-[50px] items-center gap-x-2 rounded-md transition-all ease-in duration-100 cursor-pointer border-transparent border hover:border-purple-400"
    >
      <div className="text-purple-400 flex flex-row text-nowrap items-center text-xl justify-start gap-x-2">
        {children}
      </div>
      <span className="border-l border-purple-400 pl-5 text-2xl sm:font-normal font-bold sm:text-xl">
        {value}
      </span>
    </a>
  );
};
