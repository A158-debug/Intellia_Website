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
          <div className="basis-7/12 flex justify-center content-center">
            <div className="content text-white self-center text-center">
              <p className="text-4xl department_heading">
                BOARD OF DEPARTMENTAL SOCIETIES
              </p>
              <p className="text-xl">IIT JODHPUR</p>
              <p className="">presents</p>
              <p
                className="intellia_heading text-9xl leading md:text-[230px] md:leading-[250px]"
                style={{
                  color: "#fff",
                  textShadow: "0 0 7px ",
                }}
              >
                Intellia
              </p>
              <p className="text-2xl pl-8 font-semibold">
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

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="mt-10 text-9xl text-white font-semibold" style={{fontFamily: 'Raleway'}}>
<div className="flex"><p>HOW</p></div>
<div className="flex relative">
 <p className="absolute left-20 ">THIS</p>  
</div>
<div className="flex p-10 relative">
 <p className="absolute left-40 top-28">WORKS</p>  
</div>
</div> */
}
