let tl = gsap.timeline();

tl.from('#nav h3',{
    y:-50,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.3,
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,
})