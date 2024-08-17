import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Grey_Qo } from "next/font/google";
const Grey = Grey_Qo({ weight: "400", subsets: ["latin"] });
export default function State() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#eagerness", {
      scrollTrigger: {
        trigger: "#eagerness",
        start: "top 93%",
        end: "bottom 80%",
        scrub: 2,
      },
      y: 0,
      opacity: 1,
    });
    gsap.to("#eagerness1", {
      scrollTrigger: {
        trigger: "#eagerness1",
        start: "10% 93%",
        end: "bottom 80%",
        scrub: 2,
      },
      y: 0,
      opacity: 1,
    });
    gsap.to("#love", {
      scrollTrigger: {
        trigger: "#love",
        start: "10% 93%",
        end: "bottom 80%",
        scrub: 2,
      },
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <div className="w-full flex justify-center text-gray-600">
      <div className="w-4/5 flex justify-between flex-wrap">
        <div className="text-3xl font-normal w-full md:w-2/5 tracking-widerleading-10 mb-4 md:-ml-10">
          <div className="">
            <div className="opacity-0 translate-y-5" id="eagerness">
              <span
                className={`text-7xl text-black opacity-100 ${Grey.className}`}
              >
                M
              </span>
              y eagerness to learn new things and my interest{" "}
            </div>
          </div>
          <div className="">
            <div className="opacity-0 translate-y-5" id="eagerness1">
              in web development have driven me to become a full stack
              developer.{" "}
            </div>
          </div>
        </div>
        <div className="md:mt-28 overflow-hidden w-full md:w-2/6 text-3xl mr-0 md:mr-20 mb-10">
          {" "}
          <div className="translate-y-28 mb-10" id="love">
            {" "}
            <span
              className={`text-7xl text-black font-light ${Grey.className}`}
            >
              I
            </span>{" "}
            love creating dynamic websites and learning to do it.
          </div>
        </div>
      </div>
    </div>
  );
}
function activateScrollAnimation() {
  throw new Error("Function not implemented.");
}
