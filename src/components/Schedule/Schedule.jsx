import React from 'react';
import { useState } from 'react';

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
          className={`bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            activeTab === tab.id ? 'bg-gray-700 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="p-4 bg-gray-200 rounded-b-lg">
      <ul className="list-disc pl-4">
        {schedules[activeTab].map((item, index) => (
          <li key={index}>
            <span className="font-bold">{item.time}</span>: {item.event}
          </li>
        ))}
      </ul>
    </div>
  </div>

  )
}

export default Schedule