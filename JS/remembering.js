/* Scroll Trigger Actions */

gsap.registerPlugin(ScrollTrigger);

gsap.to(".section-one .image-caption", {
  xPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-two",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});


gsap.to(".section-two .image-caption", {
  xPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-two",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".section-three .image-caption", {
  xPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-three",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".section-five .image-caption", {
  xPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-four",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".section-seven .image-caption", {
  xPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-seven",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});