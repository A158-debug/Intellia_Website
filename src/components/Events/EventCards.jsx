import React from "react";
import "./Events.css";
import { technocrates, cricket, rangsmash } from "../../img/Events/index";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const department_logos = [
  { id: 1, photo: cricket, name: "Sports" },
  { id: 2, photo: technocrates, name: "Tech" },
  { id: 3, photo: rangsmash, name: "Cult" },
];

const EventCards = () => {
  return (
    <div className="py-10 md:py-20">
      <p className="text-4xl md:text-7xl font-semibold text-white text-center">
        EVENTS
      </p>

      <div class="flex flex-row flex-wrap mt-10 justify-center content-center p-3 md:p-0">
        {department_logos.map((e) => (
          <Link to="./Events" rel="noreferrer" className="">
            <div className="bg-white text-teal-700 m-2 app__work-item ">
              <div className="relative ">
                <img src={e.photo} alt="" className="object-cover w-96 h-56" />
                <motion.div
                  className="app__work-hover flex justify-center items-center"
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                >
                  <motion.div
                    className=" text-3xl flex  text-white"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <FiExternalLink />
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-2">
                <p className="text-2xl text-center font-semibold">{e.name} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
