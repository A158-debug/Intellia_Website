import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="flex content-center cursor-pointer">
          {/* <Image src={header_logo} alt="logo" /> */}
          <p className="text-2xl self-center ml-2 text-white">Intellia</p>
        </div>

        <ul className="app__navbar-links list-none flex justify-center content-center">
          {["Home", "About", "BDS", "Events", "Team"].map((item) => (
            item === "Events" ? (
              <li
                className="app__flex p-text flex flex-col cursor-pointer mx-4"
                key={`link-${item}`}
                onMouseEnter={() => setEventsDropdown(true)}
                onMouseLeave={() => setEventsDropdown(false)}
              >
                <div />
                <span className="" style={{ color: "white" }}>
                  {item}
                </span>
                {eventsDropdown && (
                  <ul className="absolute bg-gray-100 w-48 mt-2 rounded-md shadow-lg"
                    onMouseEnter={() => setEventsDropdown(true)}
                    onMouseLeave={() => setEventsDropdown(false)}>
                    <li className="p-2">
                      <Link to="./event1" className="" style={{ color: "black" }}>
                        Event 1
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="./event2" className="" style={{ color: "black" }}>
                        Event 2
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="./event3" className="" style={{ color: "black" }}>
                        Event 3
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li
                className="app__flex p-text flex flex-col cursor-pointer mx-4"
                key={`link-${item}`}
              >
                <div />
                <Link to={`./${item}`} className="" style={{ color: "white" }}>
                  {item}
                </Link>
              </li>
            )
          ))}
          <li
            className="app__flex p-text flex flex-col cursor-pointer mx-4"
            key={`link-contact`}
          >
            <div />
            <Link to="/#Contact" className="" style={{ color: "white" }}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.95, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["Home", "About", "BDS", "Team"].map((item) => (
                  <li key={item}>
                    <a href={`${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="Events"
                    onClick={() => setEventsDropdown(!eventsDropdown)}
                    onMouseEnter={() => setEventsDropdown(true)}
                    onMouseLeave={() => setEventsDropdown(false)}
                    className={eventsDropdown ? "active" : ""}
                  >
                    Events
                  </a>
                  {eventsDropdown && (
                    <ul>
                      {["Event 1", "Event 2", "Event 3"].map((event) => (
                        <li key={event}>
                          <a href={`#${event}`} onClick={() => setToggle(false)}>
                            {event}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/#Contact" >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
