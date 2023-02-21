import React from "react";

import Adarsh from '../../img/DepartmentalSecretary/Adarsh.jpg';
import Anita from '../../img/DepartmentalSecretary/ANITA.jpg';
import Arpit from '../../img/DepartmentalSecretary/Arpit.jpg';
import Ayush from '../../img/DepartmentalSecretary/Ayush.jpg';
import Haifa from '../../img/DepartmentalSecretary/Haifa.jpg';
import Himanchal from '../../img/DepartmentalSecretary/Himanchal.jpg';
import Kajal from '../../img/DepartmentalSecretary/Kajal.jpg';
import Manoj from '../../img/DepartmentalSecretary/Manoj.jpg';
import Saurabh from '../../img/DepartmentalSecretary/Saurabh_Modi.jpeg';
import Shivam from '../../img/DepartmentalSecretary/Shivam.jpg';
import Shreshth from '../../img/DepartmentalSecretary/Shreshth.jpg';
import Simran from '../../img/DepartmentalSecretary/Simran.jpg';
import Yashmita from '../../img/DepartmentalSecretary/Yashmita.jpg';
import Avinash from '../../img/DepartmentalSecretary/Avinash.jpg';
import Atul from '../../img/DepartmentalSecretary/Atul.png';

const department_logos = [
  { id: 1, photo: Ayush, name: "Engineering Science" },
  { id: 2, photo: Haifa, name: "Engineering Science" },
  { id: 3, photo: Arpit, name: "Engineering Science" },
  { id: 4, photo: Adarsh, name: "Engineering Science" },
  { id: 5, photo: Saurabh, name: "Engineering Science" },
  { id: 6, photo: Kajal, name: "Engineering Science" },
  { id: 7, photo: Shivam, name: "Engineering Science" },
  { id: 8, photo: Manoj, name: "Engineering Science" },
  { id: 9, photo: Himanchal, name: "Engineering Science" },
  { id: 10, photo: Shreshth, name: "Engineering Science" },
  { id: 11, photo: Yashmita, name: "Engineering Science" },
  { id: 12, photo: Simran, name: "Engineering Science" },
  { id: 13, photo: Anita, name: "Engineering Science" },
  { id: 14, photo: Avinash, name: "Engineering Science" },
  { id: 15, photo: Atul, name: "Engineering Science" },

];

const Team = () => {
  return (
      <div className="text-white">
        <p className="text-7xl font-semibold text-center">
          OUR TEAMS
        </p>
        <div class="flex flex-row flex-wrap mt-10 justify-center content-center">
          {department_logos.map((e) => (
            <div className="bg-white text-teal-700 w-60 m-2 ">
              <div className="">
                <img src={e.photo} alt="" srcset="" className="object-cover w-96 h-56"/>
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

export default Team;
