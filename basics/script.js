var tl = gsap.timeline();

tl.from("#nav h1", {
  y: 20,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});

tl.from("#box2 h4", {
  y: 20,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});

gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});

tl.from("#box1 h1", {
  y: 250,
  opacity: 0,
  duration: 0.5,
  scale: 0.4,
});

// var scroll = gsap.timeline()
// scroll.to("#page1 #bx1" ,{
//     y:-250,
//     duration:1,
//     delay:0.5,
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
//     borderRadius:"50%"

// })
// scroll.to("#page2 #bx1" ,{
//     x:350,
//     duration:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
//     borderRadius:"50%"

// })
// scroll.to("#page3 #bx1" ,{
//     y:-350,
//     duration:1,
//     delay:0.5,
//     rotate:360,
//     repeat:-1,
//     yoyo:true,
//     borderRadius:"50%"

// })
gsap.to("#page1 #bx1", {
  y: -250,
  duration: 1,
  delay: 0.5,
  rotate: 360,
  repeat: -1,
  yoyo: true,
  borderRadius: "50%",
});


// gsap.to("#page2 #bx1", {
//   scale: 0,
//   duration: 2,
//   delay: 0.5,
//   rotate: 360,
//   yoyo: true,
//   borderRadius: "50%",
//   scrollTrigger: {
//     trigger: "#page2 #bx1",
//     scroll: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 40%",
//   },
// });

gsap.from("#page2 h1", {
    opacity:0,
    duration: 2,
    x:500,
    delay: 0.5,
    scrollTrigger:{
        trigger:("#page2 h1"),
        scroller:"body",
        start:("top 60%"),
        end:("top 40%"),
        scrub:2,
        
    }
})

gsap.from("#page2 h2", {
    opacity:0,
    duration: 2,
    x:-500,
    delay: 0.5,
    scrollTrigger:{
        trigger:("#page2 h1"),
        scroller:"body",
        start:("top 60%"),
        end:("top 40%"),
        scrub:2,
        
    }
})

gsap.to("#page3 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end:"top -90%",
        scrub:2,
        pin:true
    }
})

// ..............................tl......

var path =`M 10 100 Q 250 100 1250 100`
var finalPath =`M 10 100 Q 250 100 1250 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove" , function (dets) {
    path=`M 10 100 Q ${dets.x} ${dets.y} 1250 100`

    gsap.to("svg path" , {
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave" , function(){
    gsap.to("svg path",{
       attr:{d:finalPath},
       duration:1.5,
       ease:"elastic.out(1,0.2)"
    })
})
