import React, { useState,useEffect } from "react";

// -----------------Cult Events -----------------
import {
  abhivyakti,
  acrylicink,
  bollyflix,
  dubsmash,
  englishexetempore,
  euphony,
  groupdance,
  heelsandcaps,
  hindiextempore,
  jam,
  kavyansh,
  mastermind,
  meme,
  rangsmash,
  shortmoviemaking,
  snapshot,
  solodance,
  stew,
  themimic,
  facemeup,
  exhibition,
} from "../../img/Events/index";

// -----------------Tech Events -----------------
import {
  BSchools,
  Cadastrophe,
  codex,
  hackers,
  kaggle,
  technocrates,
} from "../../img/Events/index";

//---------------- sports Events  -------------
import {
  athletics,
  badminton,
  bodybuilding,
  chess,
  cricket,
  KhoKho,
  tugofwar,
  tabletennis,
  vollyball,
  valorent,
  Free_fire,
  Asphalt,GullyCricket,Boxfootball
} from "../../img/Events/index";

const total_events = [
  [
    {
      id: 1,
      name: "Cricket",
      description: `"Let's hit it out of the park!"`,
      img: cricket,
    },
    {
      id: 2,
      name: "Athletics",
      description: `"Run like the wind, jump like a champ!"
      `,
      img: athletics,
    },
    {
      id: 3,
      name: "Tug Of War",
      description:
        `"Pulling our weight to victory!"`,
      img: tugofwar,
    },
    {
      id: 4,
      name: "Volleyball",
      description:
       `"Spike it like you mean it!"`,
      img: vollyball,
    },
    {
      id: 5,
      name: "Badminton",
      description: `"Smash, drop, and win  the perfect combination!"`,
      img: badminton,
    },
    {
      id: 6,
      name: "Powerlifting",
      description:`"Rise up to the challenge  lift heavier, lift stronger!"`,
      img: bodybuilding,
    },
    {
      id: 7,
      name: "Chess",
      description: `"Checkmate, we've got this game!"`,
      img: chess,
    },
    {
      id: 8,
      name: "Kho-Kho",
      description: `"The ultimate game of speed, agility, and strategy - Kho Kho!"
      `,
      img: KhoKho,
    },
    {
      id: 9,
      name: "Table Tennis",
      description:
       `"Checkmate, we've got this game!"
       "Mind over matter the game of chess!"
       "Mastering strategy, one move at a time!"`,
      img: tabletennis,
    },
    {
      id: 10,
      name: "FreeFire",
      description:
        `Fight to be the last one standing in this intense mobile battle royale.`,
      img: Free_fire,
    },
    {
      id: 11,
      name: "Valorant",
      description:
       `Outwit your opponents with precision and strategy in this PC first-person shooter.`,
      img: valorent,
    },
    {
      id: 12,
      name: "Asphalt",
      description:
       `Blaze past the competition in this mobile racing game.`,
      img: Asphalt,
    },
    {
      id: 13,
      name: "Gully Cricket",
      description:
       ` "Watch out world, the gully girls are taking over the pitch!"`,
      img: GullyCricket,
    },
    {
      id: 14,
      name: "Box Football ",
      description:
       `"In the box, there are no limits - only opportunities to showcase your skills and shine!"`,
      img: Boxfootball,
    },
  ],
  [
    {
      id: 1,
      name: "KAGGLE KAMPIONS",
      description:
        "The world is one big data problem. We present Kaggle Kampions to solve one of these data problems. All data science and machine learning enthusiasts get ready to dive into Kaggle Kampions",
      img: kaggle,
      register_link: "./",
    },
    {
      id: 2,
      name: "CODE X",
      description:
        "Make it work, make it right, make  it fast”If you are a programming  enthusiast then Intellia presents CodeX for you.The challenging  creative competition coding challenges will put your programming and algorithmic problem-solving skills to the test",
      img: codex,
    },
    {
      id: 3,
      name: "THE CADASTROPHE",
      description:
        "You are an architect not an walking AUTOCAD. If you are ready to design something crazy for Intellia then it’s absolutely for you. Create a successful 3D Trophy/Medal design in Intellia for your department.",
      img: Cadastrophe,
    },
    {
      id: 4,
      name: "TECHNOCRATES PARADOX",
      description:
        "Competition gives you energy and keeps you focused. So all Technocrate keep boosting to compete in this paradox",
      img: technocrates,
    },
    {
      id: 5,
      name: "THE B-SCHOOLS BATTLE",
      description:
        "The Chase is such a strong format and so simple to follow.The best quiz show formats are the simplest. Be ready to battle in the Blizzard of B-Schools Battle.",
      img: BSchools,
    },
    {
      id: 6,
      name: "THE HACKERS HOUSE",
      description:
        "Innovation comes from saying NO to thousand things.” When something is important enough, you do it even if the odds are not in your favour. It's a hackathon for web and app development where you may compete against other develope",
      img: hackers,
    },
  ],
  [
    {
      id: 1,
      name: "BEAT THE BEAT",
      description:
        "Witness the rhythm come alive and feel the energy with this Group Dance event. Convey the  pleasure, sadness and envy, a rollercoaster of emotions within the steps of your feet.",
      img: groupdance,
    },
    {
      id: 2,
      name: "MOVE MAGNET",
      description:
        "Get your groove on with Solo Dance. Let the rhythm overtake you, impress  one and all with your moves. ",
      img: solodance,
    },
    {
      id: 3,
      name: "FACE ME UP",
      description:
        "Face Painting is a sophisticated art. Express your feelings, thoughts, designs and themes by painting a masterpiece on someones face. Splash on the paint and sprinkle on the glitter.",
      img: facemeup,
    },
    {
      id: 4,
      name: "RANG VISTA",
      description:
        "Rangoli making is the epitome of intricacy. Get your juices flowing, let your guard down, and marvel at how colour can convey your most profound thoughts and interesting concepts.",
      img: rangsmash,
    },
    {
      id: 5,
      name: "BOLLYFLIX",
      description:
        "Perform famous movie scenes in this event. Show us your impersonations and entertain  the audience.",
      img: bollyflix,
    },
    {
      id: 6,
      name: "THE MIMIC",
      description:
        "This event centres around Mimicry. Show your artwork and make the audience amused. The artists will get five minutes to perform. Stars from the movies are featured. Idea, originality, makeup, music, and overall impact are the criteria by which mono acting is evaluated.",
      img: themimic,
    },
    {
      id: 7,
      name: "ENGLISH EXTEMPORE",
      description:
        "This is an impromptu speech event. The subject could be any. There is a strict ban on getting ready. Candidates abilities to think on their feet, arrange their thoughts, and articulate their ideas are all tested during the impromptu speaking round.",
      img: englishexetempore,
    },
    {
      id: 8,
      name: "HINDI EXTEMPORE",
      description:
        "This is an impromptu speech event. The subject could be any. There is a strict ban on getting ready. Candidates abilities to think on their feet, arrange their thoughts, and articulate their ideas are all tested during the impromptu speaking round",
      img: hindiextempore,
    },
    {
      id: 9,
      name: "ABHIVYAKTI",
      description:
        "Write your imagination, get your creativity flowing and show your skills. The image will be blurry. After 30  seconds, you have four minutes to  write on the picture. No electronics.",
      img: abhivyakti,
    },
    {
      id: 10,
      name: "ACRYLIC INK",
      description:
        "Get your brushes ready, Acrylic Painting is creative mayhem personified. Grab some paints and use these works of art as a springboard for your own brand of creativity, the world needs it. Enjoy",
      img: acrylicink,
    },
    {
      id: 11,
      name: "MEME-O-MANIA",
      description:
        "Meme-making is humor, creativity and a touch of offense if u may. Whether you are a seasoned meme maker or just starting out, this event is perfect for anyone who loves to laugh and have a good time. So come join us for a fun and engaging meme making event that will leave you feeling inspired, entertained, and eager to share your creations with the world",
      img: meme,
    },
    {
      id: 12,
      name: "MASTERMIND",
      description:
        "Top-secret quizzes identify the world most brilliant brains. The first set of questions will focus on movies andother forms of pop culture. Afterwards, we'll choose the best five squads. The top three squads will be decided by answering science-based questions in the second round. Events both far and near will serve as the inspiration for the questions.",
      img: mastermind,
    },
    {
      id: 13,
      name: "HEELS AND CAPES",
      description:
        "Bring it on with the Fashion show. The rounds include ramp walk, skill round as well as questions from the judges. The first lap of the ramp walk has no overarching theme. Props are not  provided for the performers. The winners of the last round are Mr. and Miss INTELLIA",
      img: heelsandcaps,
    },
    {
      id: 14,
      name: "SNAPSHOT",
      description:
        "Photography is an art from the very soul. A photograph immortalises a fleeting moment that has already passed. Participants in an online  photography competition are tasked  with producing pictures that respond  to a certain subject",
      img: snapshot,
    },
    {
      id: 15,
      name: "EUPHONY",
      description:
        "Stretch the limits of your voice in this singing event.  Lift your voice to the stars and sing. Play for three minutes, maximum. We 'll be taking a look at how  well the crowd reacts to your music as well as itsz range, clarity, and rhythm.",
      img: euphony,
    },
    {
      id: 16,
      name: "KAVYANSH",
      description:
        "A poetry recitation awaits your presence, so come and be delighted!",
      img: kavyansh,
    },
    {
      id: 17,
      name: "STEW",
      description:
        "This is an informal oratory event that  puts a premium on quick thinking and reflexes. The format of competitions is determined by judges. Plusses for  being on message, being funny, being original, and being coherent.",
      img: stew,
    },
    {
      id: 18,
      name: "JAM",
      description:
        "Participating in Just a Minute (JAM) challenges students to go beyond the box when it comes to their methods of expression. Students may hone their interpersonal communication skills by competing in this competition",
      img: jam,
    },
    {
      id: 19,
      name: "DUBSMASH",
      description:
        "Your dub is wanted. Bring out your drama, IITJ Janta.After all, you are the centre of your own universe.",
      img: dubsmash,
    },
    {
      id: 20,
      name: "SHORT MOVIE-MAKING",
      description:
        "This short movie making event is your opportunity to show off your skills and ingenuity. Team up, be creative, and get ready to have a blast making a movie that will be remembered for years to come.",
      img: shortmoviemaking,
    },
    
  ],
  [
    {
      id: 1,
      name: "DEPARTMENTAL EXHIBITION",
      description:
        "Departmental Exhibitions will be held respectively for all 15 departments in the institute. It would help students to get to know about other departments also, with the help of Departmental Exhibitions, each department can showcase their departmental activities, paper presentations and model based showcasing of core knowledge",
      img: exhibition,
    },
  ]
];

const tabs = [
  { id: 0, title: "Sport Events" },
  { id: 1, title: "Tech Events" },
  { id: 2, title: "Cult Events" },
  { id: 3, title: "Exhibition" },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    
    <>
      <div className="pt-20">
        <p className="text-4xl md:text-7xl font-semibold text-white text-center">
          OUR EVENTS
        </p>
        <div className="flex justify-center flex-wrap mb-4 mt-10 md:mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-36 py-2 mt-5 md:mt-0 px-4 mx-3 md:mx-8 rounded-lg text-white hover:bg-teal-700 ${
                activeTab === tab.id ? "bg-teal-800" : "bg-regal-blue"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <p className="text-lg md:font-semibold">{tab.title}</p>
            </button>
          ))}
        </div>
        <div className="p-4 flex flex-col items-center pb-10">
          {total_events[activeTab].map((item) => (
            <div
              className="flex flex-col md:flex-row text-white p-5 mt-10 w-full md:w-4/5 events_animated_border"
              key={item.id}
              style={{ background: "rgba(255, 255, 255, 0.09)" }}
            >
              <div className="basis-full md:basis-1/2 flex flex-col justify-center">
                <p className="intellia_heading_about text-3xl md:text-5xl">
                  {item.name}
                </p>
                <p className="p-3 footer_license_text  text-sm md:text-lg ">
                  {item.description}
                </p>
                {/* <div class="my-3 md:my-1">
                  <a href="./" className="register_button md:mx-auto text-xl p-1 md:text-[24px]"><span>Register</span></a>
                </div> */}
              </div>
              <div className="basis-full md:basis-1/2">
                <img src={item.img} alt="" className="object-cover h-64 w-96" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
