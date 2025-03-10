import { motion } from "framer-motion";

const FadeInText = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInText;
