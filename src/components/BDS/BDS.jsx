import React, { useEffect } from "react";
import Mukul from "../../img/Team_Photos/Mukul.jpeg";
import DepartmnetSecretary from "../Departments/Department_Secretary";

const BDS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <p className="basis-full md:basis-6/12 footer_license_text text-lg py-4 flex self-center pr-5">
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
          <div className="basis-full md:basis-6/12">
            <p className="total_bds_department text-[140px] md:text-[220px]">
              15
            </p>
            <p className="total_bds_department_name uppercase text-[50px]  md:text-[80px]">
              Department
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-7/12 w-full p-10">
          <div className="flex flex-col text-end">
            <p className="text-5xl font-semibold px-2 ">Mukul Bhele</p>
            <p className="text-2xl p-2 ">Board of Departmental Societies</p>
            <p className="text-xl px-2">Vice President </p>
          </div>
          <div className="px-2 mt-5 w-full  text-start md:text-end" style={{textAlign:'justify'}}>
            <p className="footer_license_text text-xl">
              I would like to extend a warm welcome to all of the teams
              participating in this year's championship. As we come together to
              compete, let us not forget the true spirit of championship. While
              winning is certainly important, it is equally important to respect
              our fellow competitors and to show support and encouragement to
              all teams throughout the championship. I encourage you all to give
              your best effort and to play fair at all times. Remember, the way
              we conduct ourselves on the field is a reflection of our character
              as individuals and as a department.  I wish you all the best of luck in the championship, and I look
              forward to seeing the great performances from all teams
            </p>
            <p className="footer_license_text text-xl">
             
            </p>
          </div>
        </div>
        <div className="md:w-5/12 w-full flex justify-center md:justify-start items-center">
          <img src={Mukul} alt="" srcset="" className="h-80" />
        </div>
      </div>
      <DepartmnetSecretary />
    </div>
  );
};

export default BDS;
