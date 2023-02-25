import React from "react";
import bg2 from "../../img/bg2.png";
import "./Header.css";
import video1 from "../../img/videos/video1.mp4";
import { BsEmojiSmile } from "react-icons/bs";
import CountDown from "../CountDown/CountDown";

const Header = () => {
  return (
    <>
      <div className="relative">
        <video loop muted autoPlay className="back__video">
        <source src={video1} type="video/mp4" />
      </video>
      <div className="flex flex-row h-screen ">
        <div className=" basis-full flex justify-center content-center">
          <div className="content text-white self-center text-center">
            <p className="text-3xl department_heading">
              BOARD OF DEPARTMENTAL SOCIETIES
            </p>
            <p className="text-xl">IIT JODHPUR</p>
            <p>presents</p>
            <p
              className="text-9xl my-2 intellia_heading"
              style={{
                color: "#fff",
                textShadow: "0 0 7px ",
              }}
            >
              Intellia
            </p>
            <p className="text-xl pl-8">
              INTER DEPARTMENTAL GENERAL CHAMPIONSHIP{" "}
            </p>
          </div>
        </div>
        <div className="basis-0 md:basis-5/12 flex p-10">
          <img src={bg2} alt="" className="self-end" />
        </div>
      </div>
        <div
          className="flex justify-center content-center flex-wrap text-white p-5 gap-4"
          style={{
            background:
              "radial-gradient(circle, rgba(62,192,182,1) 0%, rgba(15,91,86,1) 100%)",
          }}
        >
          <div className=" flex ">
            <div className="text-5xl p-2 pt-5">
              <BsEmojiSmile />
            </div>
            <div>
              <h1 className="text-7xl font-semibold">232</h1>
              <p className="text-xl department_heading my-1">Happy Clients</p>
              <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className=" flex ">
            <div className="text-5xl p-2 pt-5">
              <BsEmojiSmile />
            </div>
            <div>
              <h1 className="text-7xl font-semibold">232</h1>
              <p className="text-xl department_heading my-1">Happy Clients</p>
              <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex ">
            <div className="text-5xl p-2 pt-5">
              <BsEmojiSmile />
            </div>
            <div>
              <h1 className="text-7xl font-semibold">232</h1>
              <p className="text-xl department_heading my-1">Happy Clients</p>
              <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex ">
            <div className="text-5xl p-2 pt-5">
              <BsEmojiSmile />
            </div>
            <div>
              <h1 className="text-7xl font-semibold">232</h1>
              <p className="text-xl department_heading my-1">Happy Clients</p>
              <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-10 text-9xl text-white font-semibold" style={{fontFamily: 'Raleway'}}>
         <div className="flex"><p>HOW</p></div>
         <div className="flex relative">
          <p className="absolute left-20 ">THIS</p>  
         </div>
         <div className="flex p-10 relative">
          <p className="absolute left-40 top-28">WORKS</p>  
         </div>
      </div> */}
      </div>
      <div className="flex flex-col md:flex-row text-white relative mt-20 p-3 md:p-10">
        <div className="basis-12 md:basis-6/12 flex flex-col pr-10 home_wallpaper">
          <div className="">
            <p className="text-9xl font-semibold p-2 mr-6 float-right">T</p>
          </div>
          <div className="">
            <p className="text-9xl font-semibold p-2 mr-7 float-right">E</p>
          </div>
          <div className="">
            <p className="text-9xl font-semibold p-2 mr-4 float-right">A</p>
          </div>
          <div className="">
            <p className="text-9xl font-semibold p-2 float-right">M</p>
          </div>
        </div>
        <div className="basis-12 md:basis-6/12 p-2 md:p-5 text-white text-center">
          <p className="intellia_heading_about">Intellia</p>
          <p className="footer_license_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            incidunt sit veritatis doloremque rerum porro in. Dolores blanditiis
            natus quasi eligendi reiciendis voluptatum assumenda, accusantium
            incidunt temporibus, recusandae dolore delectus?
          </p>

          <div className="flex justify-center content-center mt-10 ">
            <button
              className="border-none bg-slate-400 rounded-sm p-3"
              style={{ background: "#3ec0b6", col: "white" }}
            >
              Send Message
            </button>
          </div>
          <div className="mt-10">
            <CountDown deadline="March, 17, 2023" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-white">
        <div className="basis-6/12 p-5 flex justify-center content-center">
          <p
            className="text-4xl md:text-7xl font-bold flex self-center pl-10"
            style={{ lineHeight: "80px" }}
          >
            Lorem ipsum dolor sit amet, consec adipisicing elit{" "}
          </p>
        </div>
        <div className="basis-6/12 flex flex-col content-around justify-center">
          <div className="flex justify-center content-center my-10 ml-16">
            <div className="text-5xl p-2">
              <BsEmojiSmile />
            </div>
            <div className="flex self-center">
              <p className="footer_license_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit deserunt voluptatum sapiente magni eius. Accusantium.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center content-center my-10 ml-24 ">
            <div className="text-5xl p-2">
              <BsEmojiSmile />
            </div>
            <div className="flex self-center">
              <p className="footer_license_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit deserunt voluptatum sapiente magni eius. Accusantium.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center content-center my-10 ml-16">
            <div className="text-5xl p-2">
              <BsEmojiSmile />
            </div>
            <div className="flex self-center">
              <p className="footer_license_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit deserunt voluptatum sapiente magni eius. Accusantium.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
