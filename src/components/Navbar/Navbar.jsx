import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Navbar.css";
import favicon from "../../img/favicon.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="flex content-center cursor-pointer">
          <Link to="./">
            <img src={favicon} alt="logo" className="w-16" />
          </Link>
          <Link to="./" className="self-center">
            {" "}
            <p className="text-2xl intellia_heading text-white">
              Intellia
            </p>
          </Link>
        </div>

        <ul className="app__navbar-links list-none flex justify-center content-center">
          {["Home", "BDS", "Events", "Team"].map((item) => (
            <li
              className="app__flex p-text flex flex-col cursor-pointer mx-4"
              key={`link-${item}`}
            >
              <div />
              <Link to={`/${item}`} className="" style={{ color: "white" }}>
                {item}
              </Link>
            </li>
          ))}
          <li
            className="app__flex p-text flex flex-col cursor-pointer mx-4"
            key={`link-contact`}
          >
            <div />
            <HashLink to="/#ContactUs" className="" style={{ color: "white" }}>
              Contact Us
            </HashLink>
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
                {["Home", "BDS", "Events", "Team"].map((item) => (
                  <li key={item}>
                    <Link to={`./${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <HashLink
                    to="/#ContactUs"
                    className=""
                    onClick={() => setToggle(false)}
                  >
                    Contact Us
                  </HashLink>
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
