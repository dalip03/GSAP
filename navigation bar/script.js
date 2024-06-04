var main =document.querySelector("#main")
var cursor =document.querySelector("#cursor")
var fullNav =document.querySelector("#fullnav")
var close = document.querySelector("#close")
var menu = document.querySelector("#menu")
var tl = gsap.timeline()

main.addEventListener("mousemove" , function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1
    })
})

    tl.pause()


tl.to(fullNav ,{
    right:"0px",
    duration:0.4,
})

tl.from("#fullnav h4" ,{
     x:100,
    duration:1,
    stagger:0.4,
    opacity:0
})

menu.addEventListener("click", function(){
    tl.play()
})

close.addEventListener("click", function(){
    tl.reverse()
})

