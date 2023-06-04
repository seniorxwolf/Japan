const burger = document.querySelector('nav svg')

burger.addEventListener("click", () => {
        if(burger.classList.contains('active')){
            gsap.to('.links', {x: '100%'});
            gsap.set('body', {overflow: "auto"})
            gsap.set('body', {overflowX: "hidden"})
        }else{
            gsap.to('.links', {x: '0%'})
            gsap.fromTo('.links a', {opacity: 0, y: 0 }, {opacity: 1, y: 20, delay: 0.25, stagger: 0.25})
            gsap.set('body', {overflow: "hidden"})
        }
    burger.classList.toggle("active");
});

const pictures = gsap.utils.toArray('.picture')
gsap.set(pictures, {opacity: 0})

pictures.forEach(picture => {
    ScrollTrigger.create({
        trigger: picture,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
            gsap.to(picture, {opacity: 1});
        },
    });
});