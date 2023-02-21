import React from "react";
import ES from "../../img/DepartmentLogos/Es_logo.png";
// import SME from "../../img/DepartmentLogos/SME.jpeg";
import logo from "../../img/DepartmentLogos/logo.png";

const department_logos = [
  { id: 1, photo: ES, name: "Engineering Science" },
  { id: 2, photo: ES, name: "Engineering Science" },
  { id: 3, photo: ES, name: "Engineering Science" },
  { id: 4, photo: ES, name: "Engineering Science" },
];

const Departments = () => {
  return (
    <div className="text-white">
      <p className="text-7xl font-semibold my-10 py-2 pt-10 text-center">
        OUR TEAMS
      </p>
      <div class="flex gap-4 justify-center mt-10">
        {department_logos.map((e) => (
          <div className="bg-white text-teal-700">
            <div className="w-52 ">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="p-2">
              <p className="text-2xl text-center">Team Name</p>
              <p className="text-xl text-center">Department Name</p>
            </div>
          </div>
        ))}
      </div>
      <div class="flex gap-4 justify-center mt-10 mb-10">
        {department_logos.map((e) => (
          <div className="bg-white text-teal-700">
            <div className="w-52 ">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="p-2">
              <p className="text-2xl text-center">Team Name</p>
              <p className="text-xl text-center">Department Name</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
