import React from "react";
import Header from "../components/Header/Header";
import DepartmentTeams from "../components/Departments/Department_Teams";
import Contact from "./Contact/Contact";
import Schedule from "./Schedule/Schedule";
import Sponsors from "./Sponsors/Sponsors";
import Events from "./Events/Events";

const Home = () => {
  return (
    <div>
      <Header />
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
      <Events/>
      {/* <DepartmentTeams/> */}
      <Schedule/>
      <Sponsors/>
      <Contact/>
    </div>
  );
};

export default Home;
