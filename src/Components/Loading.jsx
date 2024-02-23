import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Loading = () => {
  const count = useMotionValue(9);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100);

    return () => controls.stop();
  }, [count]);

  return (
    <motion.div className="  text-[30rem] font-bold flex items-center justify-center container mx-auto w-full h-screen">
      {rounded}
    </motion.div>
  );
};

export default Loading;
