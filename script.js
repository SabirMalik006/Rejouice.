function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

function Animation() {
    let page1 = document.querySelector(".page-1")
    let cursor = document.querySelector(".cursor")

    page1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })
    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
Animation()

function page2animation() {
    gsap.from(".elem2 h3", {
        y: 120,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "body",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2
        }
    })
}
page2animation()

function page3() {
    gsap.from(".middle h1", {
        y: 120,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: ".page-3",
            scroller: "body",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2
        }
    })
}
page3()

function page5animation() {
    gsap.from(".elemm2 h3", {
        y: 100,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: ".page-5",
            scroller: "body",
            start: "top 40%",
            end: "top 30%",
            // markers: true,
            scrub: 2
        }
    })
}
page5animation()


function page7animation() {
    gsap.from(".eleem2 h3", {
        y: 100,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: ".page-7",
            scroller: "body",
            start: "top 40%",
            end: "top 30%",
            // markers: true,
            scrub: 2
        }
    })
}
page7animation()


function svgAnimation(){
    let page6 = document.querySelector(".page-6");
let follow = document.querySelector(".curssor");
let svgs = document.querySelectorAll("svg");

// Cursor follows the mouse
document.addEventListener("mousemove", function (e) {
  follow.style.left = e.clientX + "px";
  follow.style.top = e.clientY + "px";
});

// Make cursor visible on SVG hover
svgs.forEach((svg) => {
  svg.addEventListener("mouseenter", function () {
    follow.style.visibility = "visible";
    follow.style.opacity = "1";
  });

  svg.addEventListener("mouseleave", function () {
    follow.style.visibility = "hidden";
    follow.style.transition = "all 0.3s ease";
    follow.style.opacity = "0";
  });
});
}

svgAnimation()

function swipe(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });   
}   
swipe()

function timeline(){
    
let tl = gsap.timeline()

tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tl.to(".loader h3",{
    opacity:0,
    duration:1,
    x:-40,
    stagger:0.2,
})
tl.to(".loader",{
    opacity:0,
})
tl.to(".loader",{
    display:"none"
})
tl.from(".page-1 .text h4 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    delay:-0.4,
})
tl.from(".foot .text h4 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    delay:-0.4,
    scrollTrigger: {
        trigger: ".foot",
        start: "top 50%",
        end: "top 30%",
        scrub: true,
        // markers: true,
      },
})
}
timeline()



// // Register GSAP and ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // ScrollTrigger animation
// gsap.from(".foot .text h4 span", {
//   y: 50, // Start position, move 50px down (negative will move up)
//   opacity: 0, // Start with 0 opacity
//   stagger: 0.1, // Stagger each span by 0.1 seconds
//   delay: -0.4, // Delay the animation slightly
//   ease: "power3.out", // Smooth ease for the animation
//   scrollTrigger: {
//     trigger: ".foot", // Trigger the animation when .foot enters the viewport
//     start: "top 80%", // Animation starts when the top of .foot is 80% into the viewport
//     end: "top 30%", // Animation ends when the top of .foot reaches 30% of the viewport
//     scrub: true, // Smoothly scrubs the animation with the scroll
//     markers: true, // Show markers for debugging (optional, can be removed)
//   }
// });


