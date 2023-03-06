import React from "react";
import bg2 from "../../img/bg2.png";
import "./Header.css";
import video1 from "../../img/videos/video1.mp4";

const Header = () => {
  return (
    <>
      <div className="relative">
        {/*------- Video ------- */}
        <video loop muted autoPlay className="back__video">
          <source src={video1} type="video/mp4" />
        </video>

        {/*------- Home Page Heading --------*/}
        <div className="flex flex-row h-screen ">
          <div className="basis-11/12 md:basis-7/12 flex justify-center content-center mx-auto">
            <div className="text-white flex flex-col justify-center">
              <div className="flex flex-col self-center items-center">
                <p className="text-3xl md:text-4xl department_heading text-center">
                  BOARD OF DEPARTMENTAL SOCIETIES
                </p>
                <p className="text-xl">IIT JODHPUR</p>
                <p className="">Presents</p>
              </div>
              <div
                className="flex intellia_heading justify-center my-5 md:my-0"
                style={{
                  color: "#fff",
                  textShadow: "0 0 7px ",
                }}
              >
                <p className="text-8xl leading md:text-[230px] md:leading-[250px]">
                  Intellia
                </p>
                <p className="flex self-end  text-xl md:text-3xl">23</p>
              </div>
              <p className="text-2xl font-semibold text-center">
                INTER DEPARTMENTAL GENERAL CHAMPIONSHIP
              </p>
            </div>
          </div>
          <div className="basis-5/12 md:flex p-10 hidden ">
            <img src={bg2} alt="" className="self-end" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
