var main =document.querySelector("#main")
var cursor =document.querySelector("#cursor")
var tl = gsap.timeline()

main.addEventListener("mousemove" , function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})

tl.from("#nav h1", {
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0
})

tl.from("#menu h4", {
     y:-50,
    opacity:0,
    duration:0.6,
})
tl.from("#page1 h1",{
    x:50,
    duration:1,
    opacity:0,
    scale:0
})