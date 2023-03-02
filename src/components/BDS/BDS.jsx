import React from "react";
import Photos from "../../img/Team_Photos/HimeshDhaka.jpg";
import Cup from "../../img/Trophy.jpg";
import "./BDS.css";

const BDS = () => {
  return (
    <div className="text-white">
      <div className="relative">
        <img src={Cup} alt="About Us" className="w-full h-96 object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-bold mb-5">About Us</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem assumenda error illo in esse consequatur quas, accusantium deleniti, adipisci minus ipsam voluptate sit sed est. Placeat eos ducimus nostrum!</p>
        </div>
      </div>
      {/* <p className='text-7xl font-semibold text-center'>MEET OUR TEAM</p> */}
      <div className="pt-20 p-10">
        <p className="text-6xl font-semibold uppercase bds_heading_about py-10">
          About{" "}
        </p>
        <p className="text-4xl font-semibold uppercase py-2">
          Board of Department Society
        </p>
        <div className="flex content-center py-5">
          <p className="w-5/12 footer_license_text text-lg py-4 flex self-center pr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis odio ipsa possimus omnis animi culpa, iure impedit
            assumenda eveniet quod eum autem consectetur consequatur error optio
            ad, a enim laudantium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic labore necessitatibus accusamus commodi
            assumenda quam consectetur inventore sapiente, tempore soluta!{" "}
          </p>
          <div className="">
            <p className="total_bds_department">15</p>
            <p className="total_bds_department_name uppercase">Department</p>
          </div>

        </div>
      </div>
      {/* <p className='text-2xl text-center p-3 mb-10 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam nulla perferendis delectus eius dignissimos et nihil a, esse molestiae placeat?</p> */}
      <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-5/12 w-full flex justify-end ">
          <img src={Photos} alt="" srcset="" className="h-80" />
        </div>
        <div className="md:w-7/12 w-full p-10 flex flex-col">
          <div>
            <p className="text-5xl font-semibold px-2">Gaurav Harit</p>
            <p className="text-2xl p-2">Board of Departmental Society</p>
            <p className="text-xl px-2">President </p>
          </div>
          <div className="px-2 mt-5 w-10/12">
            <p className="footer_license_text text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quidem eum eveniet corrupti quae, quas aspernatur inventore soluta
              praesentium explicabo doloribus id, libero quis blanditiis
              aperiam. Voluptate consectetur quae, praesentium deserunt iure
              similique reprehenderit eius, laborum reiciendis saepe, asperiores
              unde!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-7/12 w-full p-10">
          <div className="flex flex-col text-end">
            <p className="text-5xl font-semibold px-2 ">Mukul Bhele</p>
            <p className="text-2xl p-2 ">Board of Departmental Society</p>
            <p className="text-xl px-2">Vice President </p>
          </div>
          <div className="px-2 mt-5 w-10/12 text-end float-right">
            <p className="footer_license_text text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quidem eum eveniet corrupti quae, quas aspernatur inventore soluta
              praesentium explicabo doloribus id, libero quis blanditiis
              aperiam. Voluptate consectetur quae, praesentium deserunt iure
              similique reprehenderit eius, laborum reiciendis saepe, asperiores
              unde!
            </p>
          </div>
        </div>
        <div className="md:w-5/12 w-full flex">
          <img src={Photos} alt="" srcset="" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default BDS;
