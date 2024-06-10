// // const openBtn=document.getElementById("openModal");
// // const closeBtn=document.getElementById("closeModal");
// // const modal=document.getElementById("modal");

// // openBtn.addEventListener("click",()=>{
// //   modal.classList.add("open");
// // });

// // closeBtn.addEventListener("click",()=>{
// //   modal.classList.remove("open");
// // });

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // --- SETUP START ---
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}

locoScroll();

const swiper = new Swiper(".swiper-container", {
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  paginationClickable: true,
  watchSlidesProgress: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 2,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -10,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader", {
  opacity: 0,
});
tl.to("#loader", {
  display: "none",
});
tl.from("#page1-content h3", {
  y: 100,
  opacity: 0,
});

tl.from("#page2-top", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.from("#page2 h2", {
  x: 40,
  opacity: 0,
  duration: 2,
  stagger: 0.1,
});
tl.from("#page3", {
  x: 40,
  opacity: 0,
  duration: 3,
  stagger: 0.1,
});
tl.from("#page4", {
  x: 40,
  opacity: 0,
  duration: 3,
  stagger: 0.1,
});
