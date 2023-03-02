import React from "react";
import Header from "../components/Header/Header";
// import DepartmentTeams from "../components/Departments/Department_Teams";
import Contact from "./Contact/Contact";
import Schedule from "./Schedule/Schedule";
import EventCards from "./Events/EventCards";
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
          className="basis-12 md:basis-6/12 flex flex-col home_wallpaper text-[120px] md:text-[170px] font-semibold leading-[110px] md:leading-[170px]"
          style={{
            color: "#fff",
            textShadow: "0 0 7px ",
          }}
        >
          <p className="pl-5 md:pl-14">T</p>
          <p className="pl-5 md:pl-14">E</p>
          <p className="pl-4 md:pl-12">A</p>
          <p className="pl-2 text-[110px] md:text-[160px] md:pl-8">M</p>
        </div>
        <div className="basis-12 md:basis-6/12 p-2 md:p-5 text-white text-center mt-20 md:mt-2">
          <p className="intellia_heading text-9xl md:text-[200px] opacity-20  leading-4">About</p>
          <p
            className="intellia_heading_about text-7xl md:text-[100px] "
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
      <div className="flex flex-col"></div>
      <div className="home_background_image relative">
        <div className="flex flex-col md:flex-row text-white py-10 p-2 md:p-5">
          <div className="basis-6/12 flex justify-center content-center">
            <p
              className="text-4xl md:text-7xl font-semibold md:font-bold flex self-center pl-10 leading-[40px] md:leading-[80px]">
              Lorem ipsum dolor sit amet, consec adipisicing elit{" "}
            </p>
          </div>
          <div className="basis-6/12 flex flex-col content-around justify-center">
            {about_info.map((e) => (
              <div>
                <div className="flex justify-center content-center my-10">
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
        <MovingText />
      </div>
      <div className="text-white text-center py-10 home_war_background  flex justify-center">
        <div className=" w-full p-3 md:p-0 md:w-4/5  flex flex-col ">
          <h1 className="text-5xl md:text-8xl font-semibold my-3 py-2 pt-10 ">
            GET READY FOR WAR
          </h1>
          <p className=" mt-10 footer_license_text text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint
            similique amet{" "}
          </p>

          <p className="my-5 footer_license_text text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            assumenda amet nobis dolore voluptatem rerum laboriosam numquam fuga
            reiciendis harum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Labore, eligendi laborum. Temporibus unde
            blanditiis dolores maxime, quaerat et saepe quas!
          </p>
        </div>
      </div>
      <EventCards />
      {/* <DepartmentTeams/> */}
      <Schedule />
      <Contact />
    </div>
  );
};

export default Home;
