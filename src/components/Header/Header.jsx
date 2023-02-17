import React from "react";
import bg2 from "../../img/bg2.png";
import "./Header.css";
import video1 from "../../img/videos/video1.mp4";
import { BsEmojiSmile } from "react-icons/bs";
import CountDown from "../CountDown/CountDown";

const Header = () => {
  return (
    <div className="relative">
      <video loop muted autoPlay className="back__video">
        <source src={video1} type="video/mp4" />
      </video>
      <div className="flex flex-row h-screen ">
        <div className="basis-7/12 flex justify-center content-center">
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
        <div className="basis-5/12 flex p-10">
          <img src={bg2} alt="" className="self-end" />
        </div>
      </div>
      <div className="flex justify-center content-center flex-wrap text-white p-5">
        <div className="w-72 h-48 flex ">
          <div className="text-5xl p-2 pt-5">
            <BsEmojiSmile />
          </div>
          <div>
            <h1 className="text-7xl font-semibold">232</h1>
            <p className="text-xl department_heading my-1">Happy Clients</p>
            <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="w-72 h-40 flex ">
          <div className="text-5xl p-2 pt-5">
            <BsEmojiSmile />
          </div>
          <div>
            <h1 className="text-7xl font-semibold">232</h1>
            <p className="text-xl department_heading my-1">Happy Clients</p>
            <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="w-72 h-40 flex ">
          <div className="text-5xl p-2 pt-5">
            <BsEmojiSmile />
          </div>
          <div>
            <h1 className="text-7xl font-semibold">232</h1>
            <p className="text-xl department_heading my-1">Happy Clients</p>
            <p className="footer_license_text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="w-72 h-40 flex ">
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
      <div className="flex text-white justify-end relative mt-20 p-10">
        <div className="basis-1/2 flex flex-col">
          <div className="">
            <p className="text-9xl font-semibold p-2">T</p>
            <p className="text-9xl font-semibold p-2">E</p>
            <p className="text-9xl font-semibold p-2">A</p>
            <p className="text-9xl font-semibold p-2">M</p>
          </div>
        </div>
        <div className="basis-1/2 p-5 text-white ">
          <p className="intellia_heading_about text-center">Intellia</p>
          <p className="text-center footer_license_text">
            {" "}
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
    </div>
  );
};

export default Header;
