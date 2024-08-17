import Image from "next/image";
import SvgName from "@/components/SvgName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import State from "@/components/State";
import Layout from "@/components/Layout";
import { useState } from "react";
import { Ubuntu } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap, { Elastic } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Works from "@/components/Works";
const ubuntu = Ubuntu({ weight: "700", subsets: ["cyrillic"] });

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#maubin", {
      opacity: 0,
      x: 40,
      duration: 1,
      ease: Elastic.easeOut,
    });
  }, []);

  const [open, setOpen] = useState<boolean>(false);
  return (
    <Layout>
      <main className="bg-customGray text-black min-h-[calc(100vh-80px)]">
        <section className="h-screen">
          <div className={ubuntu.className}>
            <div className="mt-32 md:mt-16">
              <SvgName />
            </div>
          </div>

          <div className="fixed bottom-2 right-2 flex flex-col">
            <div className="-rotate-90  -top-14 right-px mr-1 mb-7">scroll</div>
            <div className="text-black text-2xl animate-bounce opacity-75  rounded-full w-8 h-8 flex justify-center items-center ml-1">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
          <div className="absolute left-0 bottom-0 pl-2.5 w-full ">
            <div className="text-black text-3xl flex items-center">
              <div className="origin-center rotate-12 ">
                <FontAwesomeIcon icon={faGlobe} />
              </div>

              <div className="p-2 mb-2 text-gray-600" id="maubin">
                <span className="text-lg">Maubin,Ayeyarwaddy,Myanmar.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen w-full text-black -mt-20">
          <State />
          <div
            className="h-auto md:h-[100vh] transition-transform w-full bg-customGray text-gray-300 rounded-t-full"
            id="skillCircle"
          >
            <Works />
          </div>
        </section>
      </main>
    </Layout>
  );
}
