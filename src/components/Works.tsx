import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import { Grey_Qo } from "next/font/google";
import gsap from "gsap";
const Grey = Grey_Qo({ weight: "400", subsets: ["latin"] });
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";
const arr = [
  { id: 1, link: "", imgSrc: "" },
  { id: 2, link: "", imgSrc: "" },
  { id: 3, link: "", imgSrc: "" },
];
const Works = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth > 950) {
      gsap.to("#photoSlide", {
        scrollTrigger: {
          trigger: "#photoSlide",
          scrub: true,
          start: "top 60%",
          end: "bottom 55%",
        },
        x: -16,
      });
    }

    gsap.to("#work", {
      scrollTrigger: {
        trigger: "#work",
        start: "top 87%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <div className="text-gray-900  relative mt-10">
      <div
        className="group mb-5 md:mb-0 opacity-0 text-2xl translate-y-5 p-3 h-20 flex items-center"
        id="work"
      >
        <span className={`text-7xl font-light ${Grey.className}`}>M</span>y
        works{" "}
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="transition-all rotate-45 translate-y-[1px] text-xl ml-2 font-thin group-hover:translate-x-3 text-gray-700"
        />
      </div>
      <div className="md:h-[calc(100vh-80px)] w-full flex justify-center items-center">
        <div className="sm:h-auto xl:h-96 w-full border-y-2 border-slate-400 flex flex-wrap justify-around items-center">
          {arr.map((item) => {
            return (
              <div
                key={item.id}
                className="h-80 m-3 bg-slate-400 w-[420px]"
                id="photoSlide"
              >
                <a href={item.link}>
                  <img
                    src={item.imgSrc}
                    alt="photo goes here"
                    className="h-full w-full"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
