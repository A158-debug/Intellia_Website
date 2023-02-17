import React from "react";
import Header from "../components/Header/Header";
import CountDown from "../components/CountDown/CountDown";
import Departments from "../components/Departments/Departments";
import Contact from "./Contact/Contact";
import Schedule from "./Schedule/Schedule";
import Sponsors from "./Sponsors/Sponsors";

const Home = () => {
  return (
    <div>
      <Header />
     
      <div
        className="container_header text-white text-center py-10"
        style={{ backgroundColor: "rgb(20,43,46)" }}
      >
        <h1 className="text-5xl font-semibold my-3 py-2 pt-10">
          GET READY FOR WAR
        </h1>
        <p className="px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint
          similique amet{" "}
        </p>
       
        <p className="px-20 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          assumenda amet nobis dolore voluptatem rerum laboriosam numquam fuga
          reiciendis harum. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Labore, eligendi laborum. Temporibus unde blanditiis dolores
          maxime, quaerat et saepe quas!{" "}
        </p>
      </div>
      <Departments />
      <Schedule/>
      <Sponsors/>
      <Contact/>
    </div>
  );
};

export default Home;
