import React,{useState} from "react";
// import logo from "../assets/img/logo-white.png";
import { Link } from "react-router-dom";
import './Footer.css'
import { BsLinkedin ,BsInstagram, BsFacebook} from "react-icons/bs";
import { AiOutlineArrowUp } from 'react-icons/ai'


const Footer = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(true?scrolled>300:false)
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      <div className="flex flex-col text-white" style={{backgroundColor: "rgb(7,13,13)"}}>
        <div className="text-center">
          <p
            className="text-7xl my-2 mt-10"
            style={{ color: "#fff", textShadow: "0 0 7px ", fontFamily: 'Kaushan Script'}}>
            Intellia
          </p>
          <p>INTER DEPARTMENTAL GENERAL CHAMPIONSHIP</p>
        </div>
        <div className="mt-12">
        <ul className="flex flex-wrap justify-center content-center footer_links">
          <li><Link to="./">Home</Link></li>
          <li><Link to="./BDS">BDS</Link></li>
          <li><Link to="./Events">Events</Link></li>
          <li><Link to="./Team">Team</Link></li>
          <li><Link to="/#contact">Contacts</Link></li>
        </ul>
        </div>
        <div className="mt-10 flex flex-wrap justify-center content-center social_links">
          <a href="./" className="facebook"><BsLinkedin/></a>
          <a href="./" className="instagram"><BsInstagram/></a>
          <a href="./" className="instagram"><BsFacebook/></a>
          
        </div>
        <div className="text-center mt-10">
           <p className="uppercase footer_license_text text-sm  p-2">© 2022 Intellia. Inter Departmental General Championship Operated UNDER | <span style={{color:'#13c1af'}}>BOARD OF DEPARTMENTAL SOCIETIES</span></p>
        </div>
        <div className="text-center mt-10 footer_license_text text-sm py-5">
            <p>Designed By Intellia WebD</p>
        </div>
        <button onClick={scrollToTop} className="back-to-top justify-center items-center" style={{display: visible ? 'inline-flex' : 'none'}}><AiOutlineArrowUp className="upper_arrow "/></button>
      </div>
    </>
  );
};

export default Footer;

