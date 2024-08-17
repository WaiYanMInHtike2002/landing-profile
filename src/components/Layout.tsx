import { ReactNode, useState } from "react";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import FooterContact from "./FooterContact";
import Contacts from "./Contacts";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap, { Linear } from "gsap";
import Link from "next/link";
const arr = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About me", link: "/about-me" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Github", link: "https://github.com/" },
];
interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#sticky", {
      scrollTrigger: {
        trigger: "#sticky",
        start: "80px top",
        scrub: true,
      },
      position: "sticky",
      backgroundColor: "white",
      top: 0,
      boxShadow: "1px 1px 1px white",
      ease: Linear.easeInOut,
      transition: 0.5,
    });
  }, []);
  return (
    <div className="">
      {open ? (
        <div className="min-h-screen w-full bg-customGray text-black">
          <div>
            <TopNavBar open={open} setOpen={setOpen} />
          </div>
          <div className="h-[calc(100vh-80px)]">
            {arr.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative w-full h-1/4 mb-3 flex items-center text-7xl"
                >
                  <Link href={item.link} className="p-4 w-full " id="copy">
                    {item.name}
                  </Link>
                  <div className="absolute w-full h-[2px] top-1/2 bg-slate-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-customGray text-black min-h-screen">
          <div className="transition-all z-10" id="sticky">
            <TopNavBar open={open} setOpen={setOpen} />
          </div>
          <div>{children}</div>
          <div className="min-h-screen w-full bg-black text-white">
            <div className="mb-20 flex justify-center">
              <div className="h-1 w-40 translate-y-7 translate-x-1 bg-red-600 mt-2 rotate-12"></div>
              <div className="h-1 w-40 translate-y-7 translate-x-0 bg-red-600 mt-2 -rotate-12"></div>
            </div>
            <Footer />
            <FooterContact />
            <Contacts />
          </div>
        </div>
      )}
    </div>
  );
}
