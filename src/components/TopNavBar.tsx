import { acitvate } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Grey_Qo } from "next/font/google";
const Grey = Grey_Qo({ weight: "400", subsets: ["latin"] });
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
const info = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About me", link: "/about-me" },
  { id: 3, name: "Contact", link: "/contact" },
  { id: 4, name: "Github", link: "https://github.com/" },
];
interface Props {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
export default function TopNavBar({ open, setOpen }: Props) {
  useGSAP(() => {
    gsap.to("#aName", {
      rotate: 360,
    });
  }, []);

  useEffect(() => {
    acitvate();
  }, []);
  return (
    <div className="h-20 w-full flex justify-between items-center text-gray-600 ">
      <div className="ml-4 text-2xl " id="magnet">
        <div className="tracking-wider" id="magnetText">
          <Link href="/" id="magnetText">
            <span
              className={`text-7xl text-black opacity-100 ${Grey.className}`}
            >
              W
            </span>
            <span className="inline-block" id="aName">
              a
            </span>
            iyan's
          </Link>
        </div>
      </div>
      <div className="mr-4 hidden md:flex">
        {info.map((item) => {
          return (
            <Link href={item.link} key={item.id}>
              {" "}
              <div
                className="group ml-4  w-20 flex justify-center items-center relative"
                id="magnet"
              >
                <div id="magnetText">
                  <div>{item.name}</div>
                </div>
                <div className="h-px absolute w-0 group-hover:w-full transition-all bg-black -bottom-5 opacity-50"></div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="group sm:flex md:hidden mr-4">
        <button onClick={() => setOpen && setOpen(!open)}>
          <div className="h-0.5 w-7 bg-black mt-1"></div>
          <div className="h-0.5 w-7 bg-black mt-1 translate-x-1"></div>
          <div className="h-0.5 w-7 bg-black mt-1"></div>
        </button>
      </div>
    </div>
  );
}
