import React from "react";

import Adarsh from "../../img/DepartmentalSecretary/Adarsh.jpg";
import Anita from "../../img/DepartmentalSecretary/ANITA.jpg";
import Arpit from "../../img/DepartmentalSecretary/Arpit.jpg";
import Ayush from "../../img/DepartmentalSecretary/Ayush.jpg";
import Haifa from "../../img/DepartmentalSecretary/Haifa.jpg";
import Himanchal from "../../img/DepartmentalSecretary/Himanchal.jpg";
import Kajal from "../../img/DepartmentalSecretary/Kajal.jpg";
import Manoj from "../../img/DepartmentalSecretary/Manoj.jpg";
import Saurabh from "../../img/DepartmentalSecretary/Saurabh_Modi.jpeg";
import Shivam from "../../img/DepartmentalSecretary/Shivam.jpg";
import Shreshth from "../../img/DepartmentalSecretary/Shreshth.jpg";
import Simran from "../../img/DepartmentalSecretary/Simran.jpg";
import Yashmita from "../../img/DepartmentalSecretary/Yashmita.jpg";
import Avinash from "../../img/DepartmentalSecretary/Avinash.jpg";
import Atul from "../../img/DepartmentalSecretary/Atul.png";

import {
  AI_Department,
  BIO_Department,
  Chemical_Department,
  Civil_Department,
  ES_logo,
  Material_Department,
  Mathematics,
  Physics_Society,
  SOLA_Department,
  Mechanical_Department,
  Sme,
  Chemical_Society,
} from "../../img/DepartmentLogos";

const departmental_secretary = [
  {
    id: 1,
    department_photo: AI_Department,
    department_name: "School of Artificial Intelligence & Data Science Society",
    secretary_name: "Ayush Abrol",
    secretary_photo: Ayush,
  },
  {
    id: 2,
    department_photo: BIO_Department,
    department_name: "Bioscience and Bioengineering Society",
    secretary_name: "Haifa Desai",
    secretary_photo: Haifa,
  },
  {
    id: 3,
    department_photo: Chemical_Department,
    department_name: "Chemical Engineering Society",
    secretary_name: "Simran",
    secretary_photo: Simran,
  },
  {
    id: 4,
    department_photo: Civil_Department,
    department_name: "Civil and Infrastructure Society",
    secretary_name: "Manoj Solara",
    secretary_photo: Manoj,
  },
  {
    id: 5,
    department_photo: ES_logo,
    department_name: "Engineering Science Society",
    secretary_name: "Adarsh Kumar",
    secretary_photo: Adarsh,
  },
  {
    id: 6,
    department_photo: Material_Department,
    department_name: "Metallurgical and Materials Engineering Society",
    secretary_name: "Arpit Arya",
    secretary_photo: Arpit,
  },
  {
    id: 7,
    department_photo: Mathematics,
    department_name: "Mathematics Society",
    secretary_name: "Yashmita",
    secretary_photo: Yashmita,
  },
  {
    id: 8,
    department_photo: Physics_Society,
    department_name: "Physics Society",
    secretary_name: "Kajal",
    secretary_photo: Kajal,
  },
  {
    id: 9,
    department_photo: SOLA_Department,
    department_name: "School of Liberal Art Society",
    secretary_name: "Atul Kumar Pandey",
    secretary_photo: Atul,
  },
  {
    id: 10,
    department_photo: Mechanical_Department,
    department_name: "Mechanical Engineering Society",
    secretary_name: "Shivam Verma",
    secretary_photo: Shivam,
  },
  {
    id: 11,
    department_photo: Sme,
    department_name: "School of Management and Entrepreneurship Society",
    secretary_name: "Avinash Kumar Chauhan",
    secretary_photo: Avinash,
  },
  {
    id: 12,
    department_photo: Chemical_Society,
    department_name: "Chemical Society",
    secretary_name: "Anita Saran",
    secretary_photo: Anita,
  },
  {
    id: 13,
    department_photo: ES_logo,
    department_name: "Electrical Engineering Society",
    secretary_name: "Saurabh Modi",
    secretary_photo: Saurabh,
  },
  {
    id: 14,
    department_photo: ES_logo,
    department_name: "Interdisciplinary Research Programe",
    secretary_name: "Himanchal",
    secretary_photo: Himanchal,
  },
  {
    id: 15,
    department_photo: ES_logo,
    department_name: "Computer Science and Engineering Society",
    secretary_name: "Shresth Vatsal Sharma",
    secretary_photo: Shreshth,
  },
];

const Departmnet_Secretary = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex flex-col items-center">
        <p className="text-4xl md:text-7xl font-semibold text-center uppercase w-4/5">
          Our Department Secretary
        </p>
        <p className="footer_license_text text-lg text-center p-3 w-4/5 mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ipsa
          culpa ea non iure placeat voluptatibus provident soluta asperiores
          impedit!
        </p>
      </div>

      <div className="text-white flex flex-col items-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 p-3 w-4/5 justify-items-center items-center">
          {departmental_secretary.map((card) => (
            <div
              key={card.id}
              className=" shadow-lg bg-white rounded cursor-pointer p-3 "
            >
              <div className="flex flex-col md:flex-row overflow-hidden">
                <img
                  src={card.secretary_photo}
                  alt=""
                  srcset=""
                  className="object-cover w-64 h-64"
                />
                <img
                  src={card.department_photo}
                  alt=""
                  srcset=""
                  className="object-cover bg-black w-64 h-64"
                />
              </div>
              <div className="px-4 py-2 flex self-center  content-center justify-center">
                <p className="font-semibold text-lg text-center text-cyan-800">
                  {card.department_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departmnet_Secretary;
