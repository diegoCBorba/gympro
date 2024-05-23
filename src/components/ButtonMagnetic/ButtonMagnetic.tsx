import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface PropsButton {
  children: ReactNode;
}

export const ButtonMagnetic = (props: PropsButton) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.3, y: y * 0.3 }); // Para diminuir a aproximação com o mouse
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{type:"spring", stiffness: 100, damping: 15, mass: 0.1}}
    >
      {props.children}
    </motion.div>
  );
};
