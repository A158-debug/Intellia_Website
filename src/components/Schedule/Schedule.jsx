import React from "react";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillClockCircle } from "react-icons/ai";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Day 1" },
    { id: 1, title: "Day 2" },
    { id: 2, title: "Day 3" },
  ];

  const schedules = [
    [
      {
        time: "9:00 AM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        time: "11:00 AM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        time: "2:00 PM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    [
      {
        time: "10:00 AM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        time: "11:00 AM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        time: "2:00 PM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    [
      {
        time: "9:00 AM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        time: "11:00 AM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        time: "2:00 PM",
        event: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
  ];

  return (
    <div className="py-10 text-white">
       <p className="text-4xl md:text-7xl font-semibold text-white text-center">
        EVENT SCHEDULE
      </p>
      <div className="flex justify-center mb-4 mt-10 md:mt-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-36 py-2 px-4 mx-3 md:mx-8 rounded-lg hover:bg-teal-700 ${
              activeTab === tab.id ? "bg-teal-800 text-white" : "bg-regal-blue"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p className="text-lg font-semibold">{tab.title}</p>
          </button>
        ))}
      </div>
      <div className="p-4">
        <ul className="list-disc pl-4">
          <VerticalTimeline>
            {schedules[activeTab].map((item) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentStyle={{
                  background:
                    "radial-gradient(circle, rgba(62,192,182,1) 0%, rgba(15,91,86,1) 100%)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date="2011 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AiFillClockCircle />}
              >
                <h3 className="vertical-timeline-element-subtitle text-2xl">{item.time}</h3>
                <h4
                  className="vertical-timeline-element-title text-lg footer_license_text mt-2 p-2">
                 {item.event}
                </h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
