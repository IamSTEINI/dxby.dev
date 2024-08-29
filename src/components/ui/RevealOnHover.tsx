import { useEffect, useState, type ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/fmotion";
interface Props {
  children: ReactNode;
  text: string;
}
const RevealOnHover: React.FC<Props> = ({ children, text }) => {
  const [isHovered, setIV] = useState(false);
  const control = useAnimation();

  useEffect(() => {
    if (isHovered) {
      control.start("end");
    } else {
      control.start("start");
    }
  }, [control, isHovered]);

  return (
    <div
      onMouseEnter={() => setIV(true)}
      onMouseLeave={() => setIV(false)}
      className="group mt-5 select-none flex overflow-hidden items-center cursor-pointer border hover:border-purple-400 transition-all ease-linear border-[#323232] w-full p-5 rounded-md"
    >
      <span className="sm:text-xl text-base font-semibold flex items-center opacity-50 gap-x-3 bg-[#111111] z-20">
        {text}
        <FaArrowRight />
      </span>
      <motion.div
        initial="start"
        animate={control}
        variants={slideInFromLeft(0, 0.1)}
        className="opacity-0 z-10 group-hover:opacity-100 flex group-hover:w-fit w-[0px] pl-5"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOnHover;
