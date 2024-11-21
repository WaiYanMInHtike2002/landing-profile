import Layout from "@/components/Layout";
import { acitvate } from "@/utils/animations";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Playfair_Display, Grey_Qo } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { EmailProps } from "@/types/contactType";
import { createContactFetch } from "@/store/slices/contactSlice";
import { useAppDispatch } from "@/store/hooks";
import toast from "react-hot-toast";
const playFair = Playfair_Display({ weight: "400", subsets: ["cyrillic"] });

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

  const [contact, setContact] = useState<EmailProps>({
    name: "",
    gmail: "",
    content: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleSend = async () => {
    try {
      setLoading(true);
      const valid = contact.name && contact.gmail && contact.content;
      if (!valid) {
        return toast.error("Missing the required fields");
      }
      toast("Sending...");
      await dispatch(createContactFetch(contact));
      setLoading(false);
      toast.success("Sent successfully");
    } catch (error) {
      console.log("Error in sending email", error);
    }
  };
  return (
    <Layout>
      <div className={`${playFair.className} w-full h-[calc(100vh-80px)]`}>
        <div className="h-full flex justify-center items-center">
          <div>
            <div
              className="flex text-7xl text-gray-700 font-extralight
             md:text-9xl overflow-hidden"
            >
              {["C", "O", "N", "T", "A", "C", "T"].map((item, index) => {
                return (
                  <div className="" key={index + 1}>
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
          <div className="mt-20 flex justify-center lg:justify-start items-center lg:items-end flex-col">
            <div className="w-full sm:w-4/5 h-48">
              <div className="flex ml-5 sm:ml-0 text-4xl">
                {" "}
                <div className="mr-10">01.</div>
                <div>What's your name?</div>
              </div>
              <div className="outline-0 mt-5 text-2xl">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example-name"
                  className="outline-0 border-0  bg-customGray w-full pl-20"
                  onChange={(e) =>
                    setContact({ ...contact, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full sm:w-4/5 h-48">
              <div className="flex ml-5 sm:ml-0 text-4xl">
                {" "}
                <div className="mr-10">02.</div>
                <div>What's your gmail?</div>
              </div>
              <div className="outline-0 mt-5 text-2xl">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@gmail.com"
                  className="outline-0 border-0  bg-customGray w-full pl-20"
                  onChange={(e) =>
                    setContact({ ...contact, gmail: e.target.value })
                  }
                />
              </div>
            </div>

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
                  onChange={(e) =>
                    setContact({ ...contact, content: e.target.value })
                  }
                />
              </div>
            </div>
            <div
              className="group w-[90%]  mt-16 sm:mt-0 h-20 text-2xl sm:h-24 sm:mr-32 sm:w-96 rounded-full mb-7"
              id="magnet"
            >
              <div
                id="magnetText"
                className="bg-black flex justify-center items-center overflow-hidden rounded-full text-white h-full w-full cursor-pointer group-hover:text-customOrange group-hover:translate-y-2 "
              >
                <button
                  onClick={handleSend}
                  id="magnetText"
                  disabled={loading}
                  className="overflow-hidden disabled:cursor-wait rounded-full text-gray-300 h-2/5 w-full cursor-pointer group-hover:text-customOrange "
                >
                  <div className="transition-transform group-hover:-translate-y-8">
                    {" "}
                    Send
                    <span className="ml-3 -rotate-45 inline-block ">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                  <div className="translate-y-1 transition-transform group-hover:-translate-y-8">
                    {" "}
                    Send
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
