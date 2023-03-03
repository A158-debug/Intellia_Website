import React, { useState } from "react";
import bg7 from '../../img/bg7.jpg';

const total_events = [
  [
    { 
      id:1,
      name: "Tech Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7,
      register_link:"./"
    },
    { 
      id:2,
      name: "Tech Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
    { 
      id:3,
      name: "Tech Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
   
  ],
  [
    { 
      id:1,
      name: "Sports Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
    { 
      id:2,
      name: "Sports Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
    { 
      id:3,
      name: "SportsEvent Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
   
  ],
  [
    { 
      id:1,
      name: "Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
    { 
      id:2,
      name: "Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
    { 
      id:3,
      name: "Event Name",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit. orem ipsum, dolor sit amet consectetur adipisicing elit.",
      img:bg7
    },
   
  ],
];

const Events = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Tech Events" },
    { id: 1, title: "Sprts Event" },
    { id: 2, title: "Cult Events" },
  ];

  return (
    <>
      <div className="pt-10">
        <p className="text-4xl md:text-7xl font-semibold text-white text-center">
          OUR EVENTS
        </p>
        <div className="flex justify-center mb-4 mt-10 md:mt-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-36 py-2 px-4 mx-3 md:mx-8 rounded-lg text-white hover:bg-teal-700 ${
                activeTab === tab.id ? "bg-teal-800" : "bg-regal-blue"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <p className="text-lg font-semibold">{tab.title}</p>
            </button>
          ))}
        </div>
        <div className="p-4 flex flex-col items-center ">
            {total_events[activeTab].map((item) => (
              <div className="flex text-white p-5 mt-10 w-4/5 border" key={item.id}>
                  <div className="basis-1/2">
                    <p className="intellia_heading_about text-6xl">{item.name}</p>
                    <p className="py-3 px-2 footer_license_text text-lg">{item.description}</p>
                    <p className="border text-xl footer_license_text w-7/12 text-center py-3 rounded cursor-pointer mx-auto">Register</p>
                  </div>
                  <div className="basis-1/2">
                    <img src={item.img} alt="" className="object-cover h-48 w-96" />
                  </div>

              </div>
            ))}
      </div>
      </div>
    </>
  );
};

export default Events;
