import React, { useRef } from "react";
import "./Events.css";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
// } from "framer-motion";
// import { wrap } from "@motionone/utils";
// import events from "../../img/events.jfif";

// function ParallaxText({ children, baseVelocity = 100 }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         <span>{children} </span>
//         <span>{children} </span>
//         <span>{children} </span>
//         <span>{children} </span>
//       </motion.div>
//     </div>
//   );
// }

// const department_logos = [
//   { id: 1, photo: events, name: "Tech" },
//   { id: 2, photo: events, name: "Cult" },
//   { id: 3, photo: events, name: "Sports" },
// ];

const Events = () => {
  return (
    <div>
      <p className="text-7xl font-semibold text-white text-center">
        OUR EVENTS
      </p>
        {/* <div className="scrolling_text  max-w-full text-white">
          <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
         
        </div> */}
         {/* <div class="flex flex-row flex-wrap mt-10 justify-center content-center p-3 md:p-0">
            {department_logos.map((e) => (
              <div className="bg-white text-teal-700 m-2 ">
                <div className="">
                  <img src={e.photo} alt="" srcset="" className="object-cover w-96 h-56"/>
                </div>
                <div className="p-2">
                  <p className="text-2xl text-center">{e.name} </p>
                </div>
              </div>
            ))}
          </div> */}
    </div>
  );
};

export default Events;
