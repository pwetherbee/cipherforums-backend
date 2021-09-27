import * as React from "react";
import { motion } from "framer-motion";

export const CoolBox = () => (
  <motion.div
    initial="hidden"
    animate={{ scale: 2 }}
    transition={{ duration: 2 }}
  />
);
