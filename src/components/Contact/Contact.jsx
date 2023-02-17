import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact_section_bg py-10">
      <div className="flex flex-col w-10/12 text-white mx-auto my-10 p-5 contact_section">
        <div className="flex justify-center content-center contact_icons">
          <div className="basis-1/3 flex content-center ">
            <div className="icons mx-3">
              <HiLocationMarker />
            </div>
            <div>
              <p className="text-2xl font-semibold">Location</p>
              <p>
                A108 Adam Street <br /> New york, NY 53456
              </p>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center content-center">
            <div className="icons mx-3">
              <HiLocationMarker />
            </div>
            <div>
              <p className="text-2xl font-semibold">Location</p>
              <p>
                A108 Adam Street <br /> New york, NY 53456
              </p>
            </div>
          </div>
          <div className="basis-1/3 flex justify-end content-center">
            <div className="icons mx-3">
              <HiLocationMarker />
            </div>
            <div>
              <p className="text-2xl font-semibold">Location</p>
              <p>
                A108 Adam Street <br /> New york, NY 53456
              </p>
            </div>
          </div>
        </div>
        <div class="flex jus flex-col contact_inputs mt-10">
          <div className="flex flex-row">
            <div className="basis-1/2 flex justify-start">
              <input
                type="text"
                className="w-11/12 px-2 py-1 outline-0"
                placeholder="Your Name"
              />
            </div>
            <div className="basis-1/2 flex justify-end ">
              <input
                type="text"
                className="w-11/12 px-2 py-1  outline-0"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-full flex justify-center">
              <input
                type="text"
                className="w-full px-2 py-1 outline-0"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-full flex justify-center">
              <textarea
                type="text"
                className="w-full px-2 py-1 outline-0"
                placeholder="Your Name"
                rows="5"
              />
            </div>
          </div>
          <div className="flex justify-center content-center mb-5">
            <button
              className="border-none bg-slate-400 rounded-sm p-3"
              style={{ background: "#3ec0b6", col: "white" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
