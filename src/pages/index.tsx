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
      <section className="">
        <div className="h-[calc(100vh-80px)] w-full relative">
          <div className="pt-14">
            <SvgName />
          </div>
          <div className="absolute bottom-1 mb-5 sm:mb-0 left-2">
            <img
              src="/location.png"
              alt=""
              height={30}
              width={30}
              className="inline-block animate-spin "
            />{" "}
            Maubin, Ayeyarwaddy, Myanmar.
          </div>
          <div className="fixed right-2 bottom-3">
            <div className="rotate-90 -translate-y-3">scroll</div>
            <div>
              <Image
                src={"/downArrow.png"}
                alt="arrow photo"
                width={30}
                height={30}
                className="translate-x-1"
              />
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-full flex items-center">
          <div className="">
            <State />
          </div>
        </div>
        <div className="min-h-screen">
          <Works />
        </div>
      </section>
    </Layout>
  );
}
