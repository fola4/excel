import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  animate: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.2,
    },
  }),
};

function TeamMember({ name, image, index }) {
  return (
    <motion.div
      className="relative"
      variants={variants}
      initial="hidden"
      whileInView="animate"
      custom={index}
    >
      <p className="absolute bottom-5 left-5 text-2xl text-white ">{name}</p>
      <img src={image} alt="team-member" />
    </motion.div>
  );
}

export default TeamMember;
