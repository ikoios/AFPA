import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Animation slide from bottom to center
export const slideInElem = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: elem,
        end: "bottom center",
      },
    }
  );
};

// Same Animation with delay
export const slideInElemDelay = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: elem,
        end: "bottom center",
      },
    }
  );
};
