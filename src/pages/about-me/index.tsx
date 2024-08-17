import Layout from "@/components/Layout";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Playfair_Display, Grey_Qo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const playFair = Playfair_Display({ weight: "400", subsets: ["cyrillic"] });
const Grey = Grey_Qo({ weight: "400", subsets: ["latin"] });
const arr = [
  { name: "Ambition .", href: "#toExplain" },
  { name: "Age .", href: "#toExplain" },
  { name: "Education .", href: "#toExplain" },
];
export default function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.to("#firstItem", {
      y: "-137px",
      stagger: 0.17,
    });
    gsap.to("#secondItem", {
      y: 0,
      opacity: 1,
      delay: 1.5,
      stagger: 0.1,
    });
    gsap.to("#ambition", {
      y: 0,
      opacity: 1,
      delay: 2.3,
      stagger: 0.2,
    });
    tl.to("#goodDeveloper", {
      scrollTrigger: {
        trigger: "#toExplain",
        start: "top 87%",
        end: "50% 50%",
      },
      y: 0,
      opacity: 1,
      transition: 1,
      duration: 0.5,
      ease: Linear.easeIn,
    });
    tl.to("#goodDeveloper2", {
      scrollTrigger: {
        trigger: "#toExplain",
        start: "top 60%",
        end: "50% 50%",
      },
      y: 0,
      opacity: 1,
      transition: 1,
      duration: 0.5,
      ease: Linear.easeIn,
    });
  }, []);
  return (
    <Layout>
      <div className={`${playFair.className} w-full h-[calc(100vh-80px)]`}>
        <div className="h-full flex justify-center items-center">
          <div>
            <div
              className="flex text-7xl
             md:text-9xl overflow-hidden"
            >
              {["A", "B", "O", "U", "T", "M", "3"].map((item) => {
                return (
                  <div className="" key={item}>
                    <div
                      className="absolute translate-y-[102px] opacity-0"
                      id="secondItem"
                    >
                      {item}
                    </div>
                    <div className="" id="firstItem">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <div className="flex">
                {arr.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="p-3 text-xl text-slate-700 translate-y-5 opacity-0"
                      id="ambition"
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-h-screen relative w-full flex flex-wrap justify-center"
        id="toExplain"
      >
        <div className="w-[600px]">
          <div className="flex justify-center md:justify-start ml-7 mt-10">
            <div
              className="w-full mr-2 md:w-[650px] text-xl leading-10 tracking-wide translate-y-7 opacity-0 transition-all"
              id="goodDeveloper"
            >
              {" "}
              <span className={`text-7xl font-light ${Grey.className}`}>M</span>
              y ambition is to become a good developer both in frontend and
              backend. Especially love in designing the frontend. Now I&apos;m
              already 22 years and a University of Distance Education student.{" "}
            </div>
          </div>
          <div className="ml-7 mt-5 flex justify-center md:justify-start text-xl leading-10 tracking-wide">
            {" "}
            <div
              className="w-full mr-2 md:w-[650px] text-xl leading-10 tracking-wide translate-y-7 opacity-0 transition-all"
              id="goodDeveloper2"
            >
              <span className={`text-7xl font-light ${Grey.className}`}>L</span>
              earning new skills and designing the web page always make me
              thrilled and still have to learn a lot of new skills.
            </div>
          </div>
        </div>
        <div className="w-[50%] mt-10 flex justify-center mb-16">
          <div className="h-96 w-96 border border-slate-400">
            <Image src={""} alt="photo goes here" />
          </div>
        </div>
        <div className="group absolute mt-3 bottom-1 right-4 xl:bottom-10 xl:right-7 text-[#2F2FD6]">
          <Link href="/contact">
            <span className={`text-7xl font-light ${Grey.className}`}>w</span>
            anna talk about work?{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="transition-all group-hover:translate-x-3"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
