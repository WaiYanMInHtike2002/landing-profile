import { useGSAP } from "@gsap/react";
import gsap, { Elastic, Linear, Power4 } from "gsap";
import { Ubuntu, Urbanist } from "next/font/google";
const ubuntu = Ubuntu({ weight: "700", subsets: ["latin"] });
export default function SvgName() {
  useGSAP(() => {
    gsap.to("#intro", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: Power4.easeOut,
    });
    gsap.to("#intro2", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <div className={ubuntu.className}>
      <div className=" text-[87px] sm:text-8xl md:text-9xl flex flex-col justify-center items-center w-full h-full overflow-hidden font-medium opacity-70">
        <div className="w-full h-full">
          <div className="-translate-x-12 opacity-0" id="intro">
            <svg width="100%" height="100%">
              <text
                x="50%"
                y="130"
                fill="none"
                stroke="black"
                strokeWidth="3"
                textAnchor="middle"
              >
                Hi,I'm....
              </text>
            </svg>
          </div>
        </div>
        <div className=" h-full w-full">
          {" "}
          <div className="w-full h-full ">
            <div className="translate-x-12 opacity-0" id="intro2">
              <svg width="100%" height="100%">
                <text
                  x="50%"
                  y="130"
                  fill="black"
                  stroke="black"
                  strokeWidth="4"
                  textAnchor="middle"
                >
                  WAI YAN
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className=" h-full w-full">
          <div className="w-full h-full">
            <div className="-translate-x-12 opacity-0" id="intro">
              <svg width="100%" height="100%">
                <text
                  x="50%"
                  y="130"
                  fill="black"
                  stroke="black"
                  strokeWidth="4"
                  textAnchor="middle"
                >
                  MIN HTIKE
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
