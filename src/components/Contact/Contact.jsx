import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact_section_bg py-10" id="ContactUs">
        <p className="text-4xl md:text-7xl font-semibold text-white text-center">
          MESSAGE US
        </p>
      <div className="flex flex-col md:w-10/12 text-white mx-auto my-10 p-5 contact_section">
        {/* <div className="flex justify-start md:justify-around content-center flex-wrap contact_icons ">
          <div className="flex ">
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
          <div className="flex my-10 md:my-0">
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
          <div className="flex">
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
        </div> */}
        <div class="flex jus flex-col contact_inputs mt-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            <div className="basis-full md:basis-1/2 flex justify-start">
              <input
                type="text"
                className="w-full md:w-11/12 px-2 py-1 outline-0"
                placeholder="Your Name"
              />
            </div>
            <div className="basis-full md:basis-1/2 md:flex justify-end ">
              <input
                type="text"
                className="w-full md:w-11/12 px-2 py-1  outline-0"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-full flex justify-center">
              <input
                type="text"
                className="w-full px-2 py-1 outline-0"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-full flex justify-center">
              <textarea
                type="text"
                className="w-full px-2 py-1 outline-0"
                placeholder="Message"
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
