import Layout from "@/components/Layout";
import { acitvate } from "@/utils/animations";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { Playfair_Display, Grey_Qo } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
const playFair = Playfair_Display({ weight: "400", subsets: ["cyrillic"] });
const inputArr = [
  {
    id: "01.",
    header: "What's is your name?",
    type: "text",
    placeholder: "example-name",
  },
  {
    id: "02.",
    header: `What's is your email?`,
    type: "email",
    placeholder: "example@gmail.com",
  },
];
const arr = [
  { name: "WORK .", href: "#toWork" },
  { name: "EMAIL .", href: "#toWork" },
  { name: "CALL .", href: "#toWork" },
];
export default function Contact() {
  useGSAP(() => {
    gsap.to("#firstItem", {
      y: "-137px",
      stagger: 0.17,
      delay: 1,
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
  });
  useEffect(() => {
    acitvate();
  }, []);
  return (
    <Layout>
      <div className={`${playFair.className} w-full h-[calc(100vh-80px)]`}>
        <div className="h-full flex justify-center items-center">
          <div>
            <div
              className="flex text-7xl text-gray-700 font-extralight
             md:text-9xl overflow-hidden"
            >
              {["C", "O", "N", "T", "A", "C", "T"].map((item) => {
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
                      className="p-3 text-[17px] text-slate-700 translate-y-5 opacity-0"
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
      <div className="min-h-screen select-none text-gray-700" id="toWork">
        <div>
          <div className="flex  justify-center mt-14">
            <div className="flex flex-col lg:flex-row items-center w-full md:w-5/6">
              <div className="h-40 w-40 border object-cover bg-blue-200 rounded-full flex justify-center items-center overflow-hidden">
                <div className="h-full w-full mb-20">
                  <Image
                    src={"/photo3.png"}
                    alt="photo"
                    height={160}
                    width={160}
                  />
                </div>
              </div>
              <div className="text-7xl mt-10 sm:mt-0 sm:text-9xl ml-10 tracking-wider">
                <div className="">Let&apos;s work</div> <div>together</div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-start items-end flex-col">
            {inputArr.map((item) => {
              return (
                <div className="w-full sm:w-4/5 h-48" key={item.id}>
                  <div className="flex ml-5 sm:ml-0 text-4xl">
                    {" "}
                    <div className="mr-10">{item.id}</div>
                    <div>{item.header}</div>
                  </div>
                  <div className="outline-0 mt-5 text-2xl">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder={item.placeholder}
                      className="outline-0 border-0  bg-customGray w-full pl-20"
                    />
                  </div>
                </div>
              );
            })}
            <div className="w-full sm:w-4/5 h-48">
              <div className="flex text-4xl ml-5 sm:ml-0">
                {" "}
                <div className="mr-10">03.</div>
                <div>What kind of service are you looking for?</div>
              </div>
              <div className="outline-0 mt-5 text-2xl">
                <textarea
                  name=""
                  id=""
                  placeholder="I'd like to..."
                  className="outline-0  bg-customGray pl-20 w-full"
                />
              </div>
            </div>
            <div
              className="group w-full mt-16 sm:mt-0 h-20 text-2xl sm:h-24 sm:mr-32 sm:w-96 rounded-full mb-7"
              id="magnet"
            >
              <div
                id="magnetText"
                className="bg-black flex justify-center items-center overflow-hidden rounded-full text-white h-full w-full cursor-pointer group-hover:text-customOrange group-hover:translate-y-2 "
              >
                <button
                  id="magnetText"
                  className="overflow-hidden rounded-full text-gray-300 h-2/5 w-full cursor-pointer group-hover:text-customOrange "
                >
                  <div className="transition-transform group-hover:-translate-y-8">
                    {" "}
                    Send{" "}
                    <span className="ml-3 -rotate-45 inline-block ">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                  <div className="translate-y-1 transition-transform group-hover:-translate-y-8">
                    {" "}
                    Send{" "}
                    <span className="ml-3 -rotate-45 inline-block ">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="h-px mb-10 w-full  flex justify-center ">
              <div className="h-full mb-10 w-full sm:w-5/6 bg-black"></div>
            </div>
            <div className="w-full sm:w-4/5 h-48">
              <div className="flex text-4xl ml-5 sm:ml-0">
                {" "}
                <div className="mr-10">04.</div>
                <div>Through via call?</div>
              </div>
              <div className=" mt-5 text-2xl select-text	">
                <div className="pl-20 w-full mb-4">
                  09-976856268 / 09-982279288{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
