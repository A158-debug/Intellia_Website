import React from "react";
import ES from '../../img/DepartmentLogos/Es_logo.png';

const department_logos = [
  {id:1,photo:ES,name:"Engineering Science"},
  {id:2,photo:ES,name:"Engineering Science"},
  {id:3,photo:ES,name:"Engineering Science"},
  {id:4,photo:ES,name:"Engineering Science"},
  {id:5,photo:ES,name:"Engineering Science"},
  {id:6,photo:ES,name:"Engineering Science"},
  {id:7,photo:ES,name:"Engineering Science"},
  {id:8,photo:ES,name:"Engineering Science"},
  // {id:9,photo:ES,name:"Engineering Science"},
  // {id:10,photo:ES,name:"Engineering Science"},
  // {id:11,photo:ES,name:"Engineering Science"},
  // {id:12,photo:ES,name:"Engineering Science"},
  // {id:13,photo:ES,name:"Engineering Science"},
  // {id:14,photo:ES,name:"Engineering Science"},
  // {id:15,photo:ES,name:"Engineering Science"},
];

const Departments = () => {
  return (
    <div className="text-white">
      <p className="text-7xl font-semibold my-3 py-2 pt-10 text-center">
        OUR TEAMS
      </p>
      <div class="flex flex-row flex-wrap  justify-center content-center gap-4 border w-10/12 mx-auto">
        {
          department_logos.map(e=>(
            <div key = {e.id} className="border w-40 " >
              <img src={e.photo} alt={e.name} srcset="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Departments;
