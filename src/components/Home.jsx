import React from "react";
import Header from "../components/Header/Header";
// import DepartmentTeams from "../components/Departments/Department_Teams";
import Contact from "./Contact/Contact";
import Schedule from "./Schedule/Schedule";
import Sponsors from "./Sponsors/Sponsors";
import Events from "./Events/Events";
import { BsEmojiSmile } from "react-icons/bs";
import CountDown from "./CountDown/CountDown";
import MovingText from "./MovingText";


const intellia_info = [
  {
    id: 1,
    number: 232,
    heading: "Happy Clients",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    number: 232,
    heading: "Happy Clients",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    number: 232,
    heading: "Happy Clients",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    number: 232,
    heading: "Happy Clients",
    description: "Lorem ipsum dolor sit amet.",
  },
];

const about_info = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deserunt voluptatum sapiente magni eius. Accusantium.",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deserunt voluptatum sapiente magni eius. Accusantium.",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deserunt voluptatum sapiente magni eius. Accusantium.",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="flex justify-center content-center flex-wrap text-white p-5 gap-2 md:gap-4"
        style={{
          background:
            "radial-gradient(circle, rgba(62,192,182,1) 0%, rgba(15,91,86,1) 100%)",
        }}
      >
        <div className="flex md:flex-row flex-wrap">
          {intellia_info.map((e) => (
            <div className="md:basis-3/12 basis-1/2 flex">
              <div className="text-3xl md:text-5xl p-2 pt-5">
                <BsEmojiSmile />
              </div>
              <div>
                <h1 className="text-4xl md:text-7xl font-semibold">232</h1>
                <p className="text-sm md:text-xl department_heading my-1">
                  Happy Clients
                </p>
                <p className="footer_license_text">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-white relative mt-20 p-3 md:p-10 py-10 ">
        <div
          className="basis-12 md:basis-6/12 flex flex-col home_wallpaper text-[170px] font-semibold leading-[170px]"
          style={{
            color: "#fff",
            textShadow: "0 0 7px ",
          }}
        >
          <p className="pl-14">T</p>
          <p className="pl-14">E</p>
          <p className="pl-12">A</p>
          <p className="text-[160px] pl-8">M</p>
        </div>
        <div className="basis-12 md:basis-6/12 p-2 md:p-5 text-white text-center">
          <p
            className="intellia_heading_about"
            style={{
              color: "#fff",
              textShadow: "0 0 7px ",
            }}
          >
            Intellia
          </p>
          <p className="footer_license_text text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            incidunt sit veritatis doloremque rerum porro in. Dolores blanditiis
            natus quasi eligendi reiciendis voluptatum assumenda, accusantium
            incidunt temporibus, recusandae dolore delectus? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Adipisci nesciunt quod,
            exercitationem error quasi natus, a ipsam impedit, ex earum optio.
            Facilis accusamus ex voluptatibus at velit similique eaque minima.
          </p>
          <div className="flex justify-center content-center mt-10 ">
            <button className="about_button">Send Message</button>
          </div>
          <div className="mt-10">
            <CountDown deadline="March, 17, 2023" />
          </div>
        </div>
      </div>

     <MovingText/>

      <div className="flex flex-col md:flex-row text-white py-10 home_background_image p-5">
        <div className="basis-6/12 flex justify-center content-center">
          <p
            className="text-4xl md:text-7xl font-bold flex self-center pl-10"
            style={{ lineHeight: "80px" }}
          >
            Lorem ipsum dolor sit amet, consec adipisicing elit{" "}
          </p>
        </div>
        <div className="basis-6/12 flex flex-col content-around justify-center">
          {about_info.map((e) => (
            <div>
              <div className="flex justify-center content-center my-10 ml-16">
                <div className="text-5xl p-2">
                  <BsEmojiSmile />
                </div>
                <div className="flex self-center">
                  <p className="footer_license_text text-xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit deserunt voluptatum sapiente magni eius.
                    Accusantium.{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  

      <div
        className="container_header text-white text-center py-10 home_war_background"
        style={{ backgroundColor: "rgb(20,43,46)" }}
      >
        <h1 className="text-8xl font-semibold my-3 py-2 pt-10 ">
          GET READY FOR WAR
        </h1>
        <p className="px-10 mt-10 footer_license_text text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint
          similique amet{" "}
        </p>

        <p className="px-20 my-5 footer_license_text text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          assumenda amet nobis dolore voluptatem rerum laboriosam numquam fuga
          reiciendis harum. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Labore, eligendi laborum. Temporibus unde blanditiis dolores
          maxime, quaerat et saepe quas!
        </p>
      </div>
      <Events />
      {/* <DepartmentTeams/> */}
      <Schedule />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default Home;
