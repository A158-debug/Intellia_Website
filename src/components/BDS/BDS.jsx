import React from "react";
import Photos from "../../img/Team_Photos/HimeshDhaka.jpg";
import DepartmnetSecretary from "../Departments/Department_Secretary";
import "./BDS.css";

const BDS = () => {
  return (
    <div className="text-white ">
      <div className="pt-20 px-10">
        <p className="text-[60px] md:text-[100px] font-semibold uppercase bds_heading_about py-2 md:py-4">
          About{" "}
        </p>
        <p className="text-2xl md:text-4xl font-semibold uppercase ">
          Board of Departmental Societies
        </p>
        <div className="flex flex-col md:flex-row content-center py-5">
          <p className="basis-full md:basis-5/12 footer_license_text text-lg py-4 flex self-center pr-5">
            Board of Departmental Society is constituent body under Academics
            and Co-Curricular Activity Council (ACAC). The primary aim of the
            Board is to establish a relationship between faculty and students of
            the individual department. The board is responsible for organizing
            various activities and carrying out different welfare programs for
            the benefit of students of the department and to make them aware
            about different opportunities and benefits. It is responsible for
            promoting inter-department relationships by organising different
            events and competitions to enhance students' interest in a healthy
            manner to take learnings beyond the classroom and help the students
            and faculty members to connect with each other. Board conducts
            expert talks, seminars, sessions, discussions, and workshops for the
            holistic development of the students and makes learning a fun
            process
          </p>
          <div className="basis-full md:basis-7/12">
            <p className="total_bds_department text-[140px] md:text-[220px]">
              15
            </p>
            <p className="total_bds_department_name uppercase text-[50px]  md:text-[80px]">
              Department
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-5/12 w-full flex justify-center md:justify-end">
          <img src={Photos} alt="" srcset="" className="h-80" />
        </div>
        <div className="md:w-7/12 w-full p-5 md:p-10 flex flex-col">
          <div>
            <p className="text-5xl font-semibold px-2">Gaurav Harit</p>
            <p className="text-2xl p-2">Board of Departmental Societies</p>
            <p className="text-xl px-2">President </p>
          </div>
          <div className="px-2 mt-5 w-full md:w-10/12">
            <p className="footer_license_text text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quidem eum eveniet corrupti quae, quas aspernatur inventore soluta
              praesentium explicabo doloribus id, libero quis blanditiis
              aperiam. Voluptate consectetur quae, praesentium deserunt iure
              similique reprehenderit eius, laborum reiciendis saepe, asperiores
              unde!
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-7/12 w-full p-10">
          <div className="flex flex-col text-end">
            <p className="text-5xl font-semibold px-2 ">Mukul Bhele</p>
            <p className="text-2xl p-2 ">Board of Departmental Societies</p>
            <p className="text-xl px-2">Vice President </p>
          </div>
          <div className="px-2 mt-5 w-full md:w-10/12 text-end float-right">
            <p className="footer_license_text text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quidem eum eveniet corrupti quae, quas aspernatur inventore soluta
              praesentium explicabo doloribus id, libero quis blanditiis
              aperiam. Voluptate consectetur quae, praesentium deserunt iure
              similique reprehenderit eius, laborum reiciendis saepe, asperiores
              unde!
            </p>
          </div>
        </div>
        <div className="md:w-5/12 w-full flex justify-center md:justify-start">
          <img src={Photos} alt="" srcset="" className="h-80" />
        </div>
      </div>
      <DepartmnetSecretary />
    </div>
  );
};

export default BDS;
