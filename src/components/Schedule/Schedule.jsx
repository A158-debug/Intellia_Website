import React from 'react';
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Day 1' },
    { id: 1, title: 'Day 2' },
    { id: 2, title: 'Day 3' },
  ];

  const schedules = [
    [
      { time: '9:00 AM', event: 'event 1' },
      { time: '11:00 AM', event: 'event 2' },
      { time: '2:00 PM', event: 'event 3' },
    ],
    [
      { time: '9:00 AM', event: 'event 4' },
      { time: '11:00 AM', event: 'event 5' },
      { time: '2:00 PM', event: 'event 6' },
    ],
    [
      { time: '9:00 AM', event: 'event 7' },
      { time: '11:00 AM', event: 'event 8' },
      { time: '2:00 PM', event: 'event 9' },
    ],

  ];

  const content = [
    'This is the content for Tab 1.',
    'This is the content for Tab 2.',
    'This is the content for Tab 3.',
  ];
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${activeTab === tab.id ? 'bg-gray-700 text-white' : 'bg-gray-300'
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-200 rounded-b-lg">
        <ul className="list-disc pl-4">
          <VerticalTimeline>
            {schedules[activeTab].map((item, index) => (
              // <li key={index}>
              //   <span className="font-bold">{item.time}</span>: {item.event}
              // </li>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">{item.time}</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <p>
                  {item.event}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </ul>
      </div>
    </div>

  )
}

export default Schedule