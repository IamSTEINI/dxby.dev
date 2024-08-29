import { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Props {
  text: string;
  delay?: number;
  speed?: number;
  textcss: string;
}
const TextMarking: React.FC<Props> = ({ text, delay, speed, textcss }) => {
  return (
    <div className="w-fit h-[40px] relative flex justify-start items-center select-none">
      <span className={`${textcss} p-3`}>{text}</span>
      <motion.div
        className="bg-gradient-to-r from-purple-500 to-purple-700 absolute rounded-sm left-0 top-0 h-full w-full pt-5 -z-10"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay, duration: speed, ease: "easeOut" }}
      />
    </div>
  );
};

export default TextMarking;
