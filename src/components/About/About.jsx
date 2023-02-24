import React from "react";

import AshishDev from "../../img/Team_Photos/AshishDev.jpg";
import DeeptiGupta from "../../img/Team_Photos/DeeptiGupta.jpeg";
import HarendraPal from "../../img/Team_Photos/HarendraPal.jpg";
import HimeshDhaka from "../../img/Team_Photos/HimeshDhaka.jpg";
import Jatin from "../../img/Team_Photos/Jatin.jpg";
import Jaysukh from "../../img/Team_Photos/Jaysukh.jpg";
import JesikaRai from "../../img/Team_Photos/JesikaRai.jpg";
import Jyoti from "../../img/Team_Photos/Jyoti.jpg";
import ManojSolara from "../../img/Team_Photos/ManojSolara.jpg";
import Mohit from "../../img/Team_Photos/Mohit.jpg";
import NamanGupta from "../../img/Team_Photos/NamanGupta.jpg";
import NavneetMeena from "../../img/Team_Photos/NavneetMeena.jpg";
import Niladri from "../../img/Team_Photos/Niladri.jpg";
import Pragya from "../../img/Team_Photos/Pragya.jpg";
import RajkumarMina from "../../img/Team_Photos/RajkumarMina.jpg";
import Ritik from "../../img/Team_Photos/Ritik.jpeg";
import SamanSiddiqui from "../../img/Team_Photos/SamanSiddiqui.jpg";
import Sandeep from "../../img/Team_Photos/Sandeep.jpg";
import SanikaDeshmukh from "../../img/Team_Photos/SanikaDeshmukh.jpg";
import Simran from "../../img/Team_Photos/Simran.jpg";
import Soham from "../../img/Team_Photos/Soham.jpg";
import SrishtiSingh from "../../img/Team_Photos/SrishtiSingh.jpg";
import Utkarsh from "../../img/Team_Photos/utkarsh.jpg";

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
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 2,
    department_photo: BIO_Department,
    department_name: "Bioscience and Bioengineering Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 3,
    department_photo: Chemical_Department,
    department_name: "Chemical Engineering Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 4,
    department_photo: Civil_Department,
    department_name: "Civil and Infrastructure Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 5,
    department_photo: ES_logo,
    department_name: "Engineering Science Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 6,
    department_photo: Material_Department,
    department_name: "Metallurgical and Materials Engineering Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 7,
    department_photo: Mathematics,
    department_name: "Mathematics Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 8,
    department_photo: Physics_Society,
    department_name: "Physics Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 9,
    department_photo: SOLA_Department,
    department_name: "School of Liberal Art Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 10,
    department_photo: Mechanical_Department,
    department_name: "Mechanical Engineering Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 11,
    department_photo: Sme,
    department_name: "School of Management and Entrepreneurship Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 12,
    department_photo: Chemical_Society,
    department_name: "Chemical Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 13,
    department_photo: ES_logo,
    department_name: "Electrical Engineering Society",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 14,
    department_photo: ES_logo,
    department_name: "Interdisciplinary Research Programe",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
  {
    id: 15,
    department_photo: ES_logo,
    department_name: "Interdisciplinary Research Programe",
    secretary_name: "name of secretary",
    secretary_photo: ManojSolara,
  },
];

const About = () => {
  return (
    <div className="text-white">
      <p className="text-7xl font-semibold text-center">HEADING</p>
      <p className="footer_license_text text-lg text-center p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ipsa culpa ea non iure placeat voluptatibus provident soluta asperiores impedit!</p>
      <div className="text-white">
        <div className=" grid grid-cols-3 gap-4 mt-10 p-5">
          {departmental_secretary.map((card) => (
            <div
              key={card.id}
              className=" shadow-lg bg-white rounded cursor-pointer"
            > 
            <div className="flex overflow-hidden">
              <img src={card.secretary_photo} alt="" srcset="" className="object-cover w-96 h-60" />
              <img src={card.department_photo} alt="" srcset="" className="object-cover w-96 h-60"/>
            </div>
            <div className="px-6 py-4 flex self-center  content-center justify-center">
            <p className="font-semibold text-xl text-center text-cyan-800">{card.department_name}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
