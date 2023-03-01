import React from "react";
import "./Events.css";
import events from "../../img/bg7.jpg";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const department_logos = [
  { id: 1, photo: events, name: "Tech" },
  { id: 2, photo: events, name: "Cult" },
  { id: 3, photo: events, name: "Sports" },
];

const Events = () => {
  return (
    <div className="py-10">
      <p className="text-7xl font-semibold text-white text-center">
        OUR EVENTS
      </p>

      <div class="flex flex-row flex-wrap mt-10 justify-center content-center p-3 md:p-0">
        {department_logos.map((e) => (
          <div className="bg-white text-teal-700 m-2 ">
            <div className="app__work-img">
              <img src={e.photo} alt="" className="object-cover w-96 h-56" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover"
              >
                <a href="./" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="events_icon"
                  >
                    <FiExternalLink />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="p-2">
              <p className="text-2xl text-center">{e.name} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
