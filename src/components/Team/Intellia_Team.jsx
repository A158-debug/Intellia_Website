import React,{useEffect} from "react";
import AshishDev from "../../img/Team_Photos/AshishDev.jpg";
import HarendraPal from "../../img/Team_Photos/HarendraPal.jpg";
import HimeshDhaka from "../../img/Team_Photos/HimeshDhaka.jpg";
import Jatin from "../../img/Team_Photos/Jatin.jpg";
import Jaysukh from "../../img/Team_Photos/Jaysukh.jpg";
import JesikaRai from "../../img/Team_Photos/JesikaRai.jpg";
// import Jyoti from "../../img/Team_Photos/Jyoti.jpg";
import ManojSolara from "../../img/Team_Photos/ManojSolara.jpg";
import Mohit from "../../img/Team_Photos/Mohit.jpg";
import NamanGupta from "../../img/Team_Photos/NamanGupta.jpg";
import NavneetMeena from "../../img/Team_Photos/NavneetMeena.jpg";
import Niladri from "../../img/Team_Photos/Niladri.jpg";
import Pragya from "../../img/Team_Photos/Pragya.jpg";
import RajkumarMina from "../../img/Team_Photos/RajkumarMina.jpg";
import Ritik from "../../img/Team_Photos/Ritik.jpeg";
import Sandeep from "../../img/Team_Photos/Sandeep.jpg";
import SanikaDeshmukh from "../../img/Team_Photos/SanikaDeshmukh.jpg";
import Simran from "../../img/Team_Photos/Simran.jpg";
import Soham from "../../img/Team_Photos/Soham.jpg";
import SrishtiSingh from "../../img/Team_Photos/SrishtiSingh.jpg";
import Utkarsh from "../../img/Team_Photos/utkarsh.jpg";
import AdityaParkhi from '../../img/Team_Photos/AdityaParkhi.jpg';

import "./Team.css";
import { BsInstagram } from 'react-icons/bs';

const Intellia_Team_Cards = [
  {
    id: 1,
    position: "Coordinator",
    members: [
      { name: "Manoj Solara", id: 1, img: ManojSolara },
      { name: "Mohit Bansal", id: 2, img: Mohit },
      { name: "Naman Gupta", id: 3, img: NamanGupta },
    ],
  },
  {
    id: 2,
    position: "Sport Events Head",
    members: [
      { name: "Navneed Meena", id: 1, img: NavneetMeena },
      { name: "Sanika Deshmukh", id: 2, img: SanikaDeshmukh },
      { name: "Ashish Dev", id: 3, img: AshishDev },
      { name: "Jatin", id: 4, img: Jatin },
    ],
  },
  {
    id: 3,
    position: "Cultural Events Head",
    members: [
      { name: "Ankit Prabhakar", id: 1, img: ManojSolara },
      { name: "Pragya Bauddh", id: 2, img: Pragya },
      { name: "Soham Deshmukh", id: 3, img: Soham },
      { name: "Srishti Singh", id: 3, img: SrishtiSingh },
    ],
  },
  {
    id: 4,
    position: "Technical Events",
    members: [
      { name: "Jaysukh MakVana", id: 1, img: Jaysukh },
      { name: "Ritik Tiwari", id: 2, img: Ritik },
      { name: "Sandeep", id: 3, img: Sandeep },
    ],
  },

  {
    id: 5,
    position: "Media and Publicity",
    members: [
      { name: "Himesh Dhaka", id: 1, img: HimeshDhaka },
      { name: "Utkarsh Shrivastava", id: 2, img: Utkarsh },
    ],
  },
  {
    id: 6,
    position: "Design",
    members: [
      { name: "Jesika Rai", id: 1, img: JesikaRai },
      // { name: "Jyoti Bhookar", id: 2, img: Jyoti },
    ],
  },
  {
    id: 7,
    position: "Informal",
    members: [
      // { name: "Ritu", id: 1, img: Niladri },
      { name: "Harendra Pal", id: 1, img: HarendraPal },
      { name: "Simran Soni", id: 2, img: Simran },
    ],
  },
  {
    id: 8,
    position: "Resources",
    members: [
      { name: "Aditya Parkhi", id: 1, img: AdityaParkhi },
      { name: "Rajkumar Mina", id: 2, img: RajkumarMina },
    ],
  },
  {
    id: 9,
    position: "Marketing",
    members: [{ name: "Niladri Chattopadhya", id: 1, img: Niladri }],
  },
];

const Intellia_Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="text-white pt-20">
      {Intellia_Team_Cards?.map((team) => (
        <div key={team.id} className="mb-32">
          <p className="text-5xl font-semibold  text-center uppercase text-emerald-500">
            {team.position}
          </p>

          <div className=" flex flex-row flex-wrap justify-center content-center mt-10">
            {team.members.map((card) => (
              <div key={card.id} className="w-60 m-2 overflow-hidden shadow-lg bg-white rounded cursor-pointer member relative">
                <img src={card.img} alt="" srcset="" className="object-cover w-96 h-60"/>
                <div className="px-4 py-2">
                  <p className="font-semibold text-xl mb-2 text-center text-cyan-800">
                    {card.name}
                  </p>
                </div>
                <div class="member-info">
                  <div class="social flex flex-col justify-evenly content-center">
                    <a href="./"><BsInstagram/></a>
                    <a href="./"><BsInstagram/></a>
                    <a href="./"><BsInstagram/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Intellia_Team;
