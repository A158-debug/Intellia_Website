import React, { useState, useEffect } from "react";
import {
  CulturalRulebook,
  SportsRulebook,
  TechnicalRulebook,
} from "../../img/pdfs";
// -----------------Cult Events -----------------
import {
  abhivyakti,
  acrylicink,
  bollyflix,
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
  Asphalt,
  GullyCricket,
  Boxfootball,
} from "../../img/Events/index";

const total_events = [
  [
    {
      id: 1,
      name: "Cricket",
      description: `"Let's hit it out of the park!"`,
      img: cricket,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdqvaeCfy6XV8E1_IKmZmpsALZ78E7VPmvyVqNs9HnQkU8ZYA/viewform",
    },
    {
      id: 2,
      name: "Athletics",
      description: `"Run like the wind, jump like a champ!"`,
      img: athletics,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfJ0JA6T4ZC6pFRNA9-9I5ng3Vms4Wr4-UbViwrqa6sq9O92Q/viewform",
    },
    {
      id: 3,
      name: "Tug Of War",
      description: `"Pulling our weight to victory!"`,
      img: tugofwar,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd2bWgAUQXJ6F3S47y_pOno_2dinJONPOqlLhYYB4mrea5EwQ/viewform",
    },
    {
      id: 4,
      name: "Volleyball",
      description: `"Spike it like you mean it!"`,
      img: vollyball,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc0YMDIQQr2v2vyv-OaeJfhALchFXsMJr47hdhmB8-PKUFl1g/viewform",
    },
    {
      id: 5,
      name: "Badminton",
      description: `"Smash, drop, and win  the perfect combination!"`,
      img: badminton,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSei5GHlPz48R0odW570kTHux0Hdh3WVykSK29jnJ3IR6WmXvw/viewform",
    },
    {
      id: 6,
      name: "Powerlifting",
      description: `"Rise up to the challenge  lift heavier, lift stronger!"`,
      img: bodybuilding,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd-qt-jf7k7g6dQyCFbdpsOndUSmE_ldte0OQ7-feoiqoQW_g/viewform",
    },
    {
      id: 7,
      name: "Chess",
      description: `"Checkmate, we've got this game!"`,
      img: chess,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdIg-uZqZ5m88OlLvNF268MUuhdSb1MI_66W846t_T9W8KZxw/viewform",
    },
    {
      id: 8,
      name: "Kho-Kho (M/W)",
      description: `"The ultimate game of speed, agility, and strategy - Kho Kho!"`,
      img: KhoKho,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdEa7-CIil1T9Uu-CDgKPKheMywnyLgYKqj3cz4-YrtQbrhYA/viewform",
    },
    {
      id: 9,
      name: "Table Tennis",
      description: `"Smash the competition, own the game."`,
      img: tabletennis,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf_oAnWBeIEnJQsLg217Yv2oZq4qGtRfbnpHYrAgE6XkEooQQ/viewform",
    },
    {
      id: 10,
      name: "FreeFire",
      description: `Fight to be the last one standing in this intense mobile battle royale.`,
      img: Free_fire,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScx9MOsZgGaoMTl6wJCdr3eeamX66f2AyYU118FGLfFMf_CXQ/viewform",
    },
    {
      id: 11,
      name: "Valorant",
      description: `Outwit your opponents with precision and strategy in this PC first-person shooter.`,
      img: valorent,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfJCeh36WJnXQ_vMfaqZO2BguK2ehbnMM9dAEbCU5bUatYBWw/viewform",
    },
    {
      id: 12,
      name: "Asphalt",
      description: `Blaze past the competition in this mobile racing game.`,
      img: Asphalt,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdax1QqnwluBRcMAyhuK0F3fv37Scqea-8dXLkzXDKCoFKKbw/viewform",
    },
    {
      id: 13,
      name: "Gully Cricket (WOMEN)",
      description: ` "Watch out world, the gully girls are taking over the pitch!"`,
      img: GullyCricket,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScCI3QztaeshfrPpicWiOrUD-EMxo4fHUmuXbeuQPNryKW7iA/viewform",
    },
    {
      id: 14,
      name: "Box Football ",
      description: `"In the box, there are no limits - only opportunities to showcase your skills and shine!"`,
      img: Boxfootball,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfIW1ICUUN_Z0V-VDjUK7czfQntDlavhfnJEIJ_HOE6TNqbNg/viewform",
    },
  ],
  [
    {
      id: 1,
      name: "KAGGLE KAMPIONS",
      description:
        "The world is one big data problem. We present Kaggle Kampions to solve one of these data problems. All data science and machine learning enthusiasts get ready to dive into Kaggle Kampions",
      img: kaggle,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSczJALsjOEC5vbW_sDRGaUmQjRwP7th29iGaPNDQ0B4WxpWRg/viewform",
    },
    {
      id: 2,
      name: "CODE X",
      description:
        "Make it work, make it right, make  it fast”If you are a programming  enthusiast then Intellia presents CodeX for you.The challenging  creative competition coding challenges will put your programming and algorithmic problem-solving skills to the test",
      img: codex,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdNbeNey450zTjnLijiVDtLu_hr3L4pfi2ROHoJ3HvNHq1Vjg/viewform",
    },
    {
      id: 3,
      name: "THE CADASTROPHE",
      description:
        "You are an architect not an walking AUTOCAD. If you are ready to design something crazy for Intellia then it’s absolutely for you. Create a successful 3D Trophy/Medal design in Intellia for your department.",
      img: Cadastrophe,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfSZka0nz4_uH8Semquw3XwsRBtbFPkvJA9OjpGqNO9M_uOoA/viewform",
    },
    {
      id: 4,
      name: "TECHNOCRATES PARADOX",
      description:
        "Competition gives you energy and keeps you focused. So all Technocrate keep boosting to compete in this paradox",
      img: technocrates,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfveuDcCa3Ghg0myePnp2j6-oGOS6Fyv8YuhKqVtgKIbd1KjA/viewform",
    },
    {
      id: 5,
      name: "THE B-BATTLE",
      description:
        "The Chase is such a strong format and so simple to follow.The best quiz show formats are the simplest. Be ready to battle in the Blizzard of B-Battle.",
      img: BSchools,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc_sfOQwkhM6JbS3QManKjW4_C095eBIPaJhfwgTUzvuS3v3g/viewform",
    },
    {
      id: 6,
      name: "THE HACKERS HOUSE",
      description:
        "Innovation comes from saying NO to thousand things.” When something is important enough, you do it even if the odds are not in your favour. It's a hackathon for web and app development where you may compete against other develope",
      img: hackers,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScRSbc-jlW4zz3T99-effxkZ3K50qwm9zKiBt4fajMLL8DX3g/viewform",
    },
  ],
  [
    {
      id: 1,
      name: "BEAT THE BEAT",
      description:
        "Witness the rhythm come alive and feel the energy with this Group Dance event. Convey the  pleasure, sadness and envy, a rollercoaster of emotions within the steps of your feet.",
      img: groupdance,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdK_8556nQXVEIsZriI-IzrzwyFUOuVE9_P9rgzZ0YUEYzzKw/viewform",
    },
    {
      id: 2,
      name: "MOVE MAGNET",
      description:
        "Get your groove on with Solo Dance. Let the rhythm overtake you, impress  one and all with your moves. ",
      img: solodance,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScxLQzLF6IBpbZDw1YOj9YXL5ka0ZnmRAnl_QqlsXShuXcuyQ/viewform",
    },
    {
      id: 3,
      name: "FACE ME UP",
      description:
        "Face Painting is a sophisticated art. Express your feelings, thoughts, designs and themes by painting a masterpiece on someones face. Splash on the paint and sprinkle on the glitter.",
      img: facemeup,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScyIk4ctQm2W_e44fTDxI9MOXAQ-PnLRZUQfAsqHr7zt71s_g/viewform",
    },
    {
      id: 4,
      name: "RANG VISTA",
      description:
        "Rangoli making is the epitome of intricacy. Get your juices flowing, let your guard down, and marvel at how colour can convey your most profound thoughts and interesting concepts.",
      img: rangsmash,
      link: "https://forms.gle/Np7yvUuHmTPWs4r37",
    },
    {
      id: 5,
      name: "BOLLYFLIX",
      description:
        "Perform famous movie scenes in this event. Show us your impersonations and entertain  the audience.",
      img: bollyflix,
      link: "https://docs.google.com/forms/d/17d6OL9p2H3BHn93ubT14UzIyk5wH0uMrxbsmHI6Jy_U",
    },
    {
      id: 6,
      name: "THE MIMIC",
      description:
        "This event centres around Mimicry. Show your artwork and make the audience amused. The artists will get five minutes to perform. Stars from the movies are featured. Idea, originality, makeup, music, and overall impact are the criteria by which mono acting is evaluated.",
      img: themimic,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfKQeQl4xHhctbLLj9grfhUvwdl9ahTnkZFRJ-U7h3RtOZX9g/viewform",
    },
    {
      id: 7,
      name: "ENGLISH EXTEMPORE",
      description:
        "This is an impromptu speech event. The subject could be any. There is a strict ban on getting ready. Candidates abilities to think on their feet, arrange their thoughts, and articulate their ideas are all tested during the impromptu speaking round.",
      img: englishexetempore,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfSs8PjMqrzcwwfj5jEbNNwnTEdSsnNg2iVTWe5ZUOhdwk1IQ/viewform",
    },
    {
      id: 8,
      name: "HINDI EXTEMPORE",
      description:
        "This is an impromptu speech event. The subject could be any. There is a strict ban on getting ready. Candidates abilities to think on their feet, arrange their thoughts, and articulate their ideas are all tested during the impromptu speaking round",
      img: hindiextempore,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe8oBnu9J-PjO66Uj98URpnXRBdOzSIHUgvSR_fuC3XjyDTjg/viewform",
    },
    {
      id: 9,
      name: "ABHIVYAKTI",
      description:
        "Write your imagination, get your creativity flowing and show your skills. The image will be blurry. After 30  seconds, you have four minutes to  write on the picture. No electronics.",
      img: abhivyakti,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSefWvd39bFUDXh3qJGzT-se0u3rnaKMECo0svPXIEbdh4lKRg/viewform",
    },
    {
      id: 10,
      name: "ACRYLIC INK",
      description:
        "Get your brushes ready, Acrylic Painting is creative mayhem personified. Grab some paints and use these works of art as a springboard for your own brand of creativity, the world needs it. Enjoy",
      img: acrylicink,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfSLqoN4q7Ug2QmGuXunLU-3kuDXWovf3IuunuFu-x1fQNFHw/viewform",
    },
    {
      id: 11,
      name: "MEME-O-MANIA",
      description:
        "Meme-making is humor, creativity and a touch of offense if u may. Whether you are a seasoned meme maker or just starting out, this event is perfect for anyone who loves to laugh and have a good time. So come join us for a fun and engaging meme making event that will leave you feeling inspired, entertained, and eager to share your creations with the world",
      img: meme,
      link: "https://docs.google.com/forms/d/e/1FAIpQLScQ5Yl8ipWbZ1iOsWQpg7irTw28DcG_M8qFYwhRQWb3n2QjqA/viewform",
    },
    {
      id: 12,
      name: "MASTERMIND",
      description:
        "Top-secret quizzes identify the world most brilliant brains. The first set of questions will focus on movies andother forms of pop culture. Afterwards, we'll choose the best five squads. The top three squads will be decided by answering science-based questions in the second round. Events both far and near will serve as the inspiration for the questions.",
      img: mastermind,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfPgyh7hWfU16_V7cF_zoNP6fzPWE88TNN88J64Adfu68y5gQ/viewform",
    },
    {
      id: 13,
      name: "HEELS AND CAPES",
      description:
        "Bring it on with the Fashion show. The rounds include ramp walk, skill round as well as questions from the judges. The first lap of the ramp walk has no overarching theme. Props are not  provided for the performers. The winners of the last round are Mr. and Miss INTELLIA",
      img: heelsandcaps,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd_uilDg6OOJR4100IFdw-obO-p0EA0Tx1rJmwXl8OofEmzRQ/viewform",
    },
    {
      id: 14,
      name: "SNAPSHOT",
      description:
        "Photography is an art from the very soul. A photograph immortalises a fleeting moment that has already passed. Participants in an online  photography competition are tasked  with producing pictures that respond  to a certain subject",
      img: snapshot,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeHmsa1VhhIAFfclLKWyo3phmZf8cLTelMVT6Gfc8TDW1pYxA/viewform",
    },
    {
      id: 15,
      name: "EUPHONY",
      description:
        "Stretch the limits of your voice in this singing event.  Lift your voice to the stars and sing. Play for three minutes, maximum. We 'll be taking a look at how  well the crowd reacts to your music as well as itsz range, clarity, and rhythm.",
      img: euphony,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeaY_ONYlx-0D6PDGVGYnMIs0wh6FZEh32oxj3mrRVi7woLKg/viewform",
    },
    {
      id: 16,
      name: "KAVYANSH",
      description:
        "A poetry recitation awaits your presence, so come and be delighted!",
      img: kavyansh,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfcqmDVZY83XqscgwnBMeTdbCGAky0f4HdceYcSykRl7n-TFQ/viewform",
    },
    {
      id: 17,
      name: "STEW",
      description:
        "This is an informal oratory event that  puts a premium on quick thinking and reflexes. The format of competitions is determined by judges. Plusses for  being on message, being funny, being original, and being coherent.",
      img: stew,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc6B3o8-S8OIrUHIvqTisFci3rzWM_WobsbBsDMw2XKlSHJMA/viewform",
    },
    {
      id: 18,
      name: "JAM",
      description:
        "Participating in Just a Minute (JAM) challenges students to go beyond the box when it comes to their methods of expression. Students may hone their interpersonal communication skills by competing in this competition",
      img: jam,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdDOdFPcvaliuuw16hssidYsitOokqx0-l89RDqln6oGomx_Q/viewform",
    },
    // {
    //   id: 19,
    //   name: "DUBSMASH",
    //   description:
    //     "Your dub is wanted. Bring out your drama, IITJ Janta.After all, you are the centre of your own universe.",
    //   img: dubsmash,
    //   link: "https://docs.google.com/forms/d/e/1FAIpQLScnZMIHZurQUOghdwCnDV8RooFPo9Bmsj0Oxns2Ux_yr41k8Q/viewform",
    // },
    {
      id: 20,
      name: "SHORT MOVIE-MAKING",
      description:
        "This short movie making event is your opportunity to show off your skills and ingenuity. Team up, be creative, and get ready to have a blast making a movie that will be remembered for years to come.",
      img: shortmoviemaking,
      link: "https://forms.gle/sNqCkueG5JrhBcjr6",
    },
  ],
  [
    {
      id: 1,
      name: "DEPARTMENTAL EXHIBITION",
      description:
        "Departmental Exhibitions will be held respectively for all 15 departments in the institute. It would help students to get to know about other departments also, with the help of Departmental Exhibitions, each department can showcase their departmental activities, paper presentations and model based showcasing of core knowledge. It would be Inter-Departmental Competetion",
      img: exhibition,
    },
  ],
];

const PdfLinks = [
  {
    id: 0,
    pdflink: SportsRulebook,
    name: "Sports Rulebook",
  },
  {
    id: 1,
    pdflink: TechnicalRulebook,
    name: "Tech Rulebook",
  },
  {
    id: 2,
    pdflink: CulturalRulebook,
    name: "Cult Rulebook",
  },
];

const tabs = [
  {
    id: 0,
    title: "Sport Events",
    pdflink: SportsRulebook,
    name: "Sports Rulebook",
  },

  {
    id: 1,
    title: "Tech Events",
    pdflink: TechnicalRulebook,
    name: "Tech Rulebook",
  },

  {
    id: 2,
    title: "Cult Events",
    pdflink: CulturalRulebook,
    name: "Cult Rulebook",
  },

  {
    id: 3,
    title: "Exhibition",
    pdflink: CulturalRulebook,
    name: "Exhibition",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-20">
        <p className="text-4xl md:text-7xl font-semibold text-white text-center">
          OUR EVENTS
        </p>
        <div className="flex justify-center flex-wrap mb-4 mt-10 md:mt-10">
          {tabs.map((tab) => (
            <div className="flex">
              <button
                key={tab.id}
                className={`w-36 py-2 mt-5 md:mt-0 px-4 mx-3 md:mx-8 rounded-lg text-white hover:bg-teal-700 ${
                  activeTab === tab.id ? "bg-teal-800" : "bg-regal-blue"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <p className="text-lg md:font-semibold">{tab.title}</p>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap mb-4 mt-10 md:mt-10 ">
          {PdfLinks.map((activeLink) => (
            <div className="flex">
              <a
                href={activeLink.pdflink}
                target="_blank"
                rel="noreferrer"
                className={`py-3 mt-5 md:mt-0 px-4 mx-3 md:mx-8 rounded-lg text-white hover:bg-teal-700 bg-regal-blue text-lg md:font-semibold`}
              >
                {activeLink.name}
              </a>
            </div>
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

                <div class="my-3 md:my-1 ">
                  {item.name !== "DEPARTMENTAL EXHIBITION" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className=" md:mx-auto text-xl register_button p-1 md:text-[24px]"
                    >
                      <span>Register</span>
                    </a>
                  )}
                </div>
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
