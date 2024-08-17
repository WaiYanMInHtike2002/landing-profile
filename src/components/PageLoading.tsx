import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import { useRouter } from "next/router";
import React from "react";

const PageLoading = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const name = pathName.substring(1);
  useGSAP(() => {
    gsap.to("#loading", {
      y: "-100%",
      stagger: 0.1,
      delay: 0,
    });
    gsap.to("#name", {
      x: 80,
      // skewX: -3,
      opacity: 0,
      duration: 1,
      ease: Power2.easeOut,
    });
    gsap.to("#main", {
      zIndex: -10,
      delay: 1,
    });
  }, []);
  return (
    <div className="h-screen w-full absolute z-10 bg-white flex" id="main">
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>
      <div className="h-full w-[10%] bg-black" id="loading"></div>

      <div
        className="absolute h-40 left-[25%] md:left-[40%] top-[45%] text-gray-300 text-5xl sm:text-7xl md:text-8xl uppercase font-semibold"
        id="name"
      >
        {name === "" ? "HOME" : name}
      </div>
    </div>
  );
};

export default PageLoading;
