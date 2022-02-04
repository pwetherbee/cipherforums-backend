import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paper, Button } from "@material-ui/core";
import { CoolBox } from "../components/CoolBox.jsx";
import "../App.css";

function FramerTest() {
  const [count, setCount] = useState(0);
  const onClick = (e) => {
    setCount(count + 1);
    // console.log(count);
  };
  return (
    <div>
      <motion.div
        key={count}
        className="animatable"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button size="large" className="animatable">
          {count}
        </Button>
      </motion.div>
      <div>
        <Button
          onClick={(e) => {
            // console.log(count);
            setCount(count + 1);
          }}
        >
          refresh
        </Button>
        <div className={"animation-container"}>
          <motion.div
            key={count}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <Button
  //       onClick={(e) => {
  //         e.preventDefault();
  //         console.log(count);
  //         setCount(count + 1);
  //       }}
  //     >
  //       refresh
  //     </Button>
  //     <div className={"animation-container"}>
  //       <AnimatePresence>
  //         <CoolBox key={count} />
  //       </AnimatePresence>
  //     </div>
  //   </div>
  // );
}

export default FramerTest;
