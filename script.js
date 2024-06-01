

var tl = gsap.timeline()

tl.from("#nav h1" , {
    y:20,
    duration:1,
    delay:0.5,
    opacity:0
})

tl.from("#box2 h4" ,{
    y:20,
    duration:1,
    opacity:0,
    stagger:0.3
})

gsap.to("#box", {
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,
    yoyo:true,
})

tl.from("#box1 h1", {
    y:250,
    opacity:0,
    duration:2,
    stagger:-1,
    scale:0.4
})