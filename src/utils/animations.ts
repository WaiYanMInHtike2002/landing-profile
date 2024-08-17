import { Power4, Elastic, Back, Sine } from "gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const acitvate = () => {
  const magnetTag = document.querySelectorAll(
    "#magnet"
  ) as NodeListOf<HTMLDivElement>;

  magnetTag.forEach((element) => {
    const magnetTextTag = element.querySelector("#magnetText");

    const activate = (event: MouseEvent) => {
      const bounce = element.getBoundingClientRect();

      const newX = (event.clientX - bounce.left) / element.offsetWidth - 0.5;
      const newY = (event.clientY - bounce.top) / element.offsetHeight - 0.5;

      gsap.to(element, {
        duration: 1,
        x: newX * 5,
        y: newY * 10,
        ease: Power4.easeOut,
      });
      gsap.to(magnetTextTag, {
        duration: 1,
        x: newX * 5,
        y: newY * 10,
        ease: Power4.easeOut,
      });
    };

    const deactivate = () => {
      gsap.to(element, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
      gsap.to(magnetTextTag, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    element.addEventListener("mousemove", activate);
    element.addEventListener("mouseleave", deactivate);
  });
};

//------------------------------STATE SCROLLING OPACITY

export const activateScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const stateReveal = document.querySelectorAll("#stateReveal");
  const tl = gsap.timeline();
  stateReveal.forEach((item) => {
    tl.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "-5% 90%",
        end: "bottom 80%",
        scrub: 2,
      },
      duration: 1,
      y: 0,
    });
  });
};
