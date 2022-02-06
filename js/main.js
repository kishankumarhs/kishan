
var menu = document.getElementById('menu');
var open = false;

menu.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementsByClassName("menu-items")[0].style.left = open ? "-100%" : 0
    // document.getElementsByClassName("fa-times")[0].style.display = open ? 'block' : "none"
    // document.getElementsByClassName("fa-bars")[0].style.display = open ? 'block' : "none"
    open = !open
})
var s = document.getElementById('skills');
s.onmouseover = () => {
    if (window.innerWidth >= 767) {
        document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
            let circles = ciclegraph.querySelectorAll('.circle')
            let angle = 360 - 90, dangle = 360 / circles.length
            for (let i = 0; i < circles.length; ++i) {
                let circle = circles[i]
                angle += dangle
                circle.style.opacity = 1
                circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
            }
        })
    }
}
s.onmouseleave = () => {
    if (window.innerWidth >= 767) {
        document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
            let circles = ciclegraph.querySelectorAll('.circle')
            for (let i = 0; i < circles.length; ++i) {
                let circle = circles[i]
                circle.style.transform = `translate(-50%,-50%)`
                circle.style.zIndex = 1
                circle.style.opacity = 0
            }
        })
    }

}

document.body.onload = () => {


    let year = document.getElementById("year");
    let currentYear = new Date().getFullYear();
    year.innerHTML = currentYear;
    year.style.margin = "0px 5px"
    year.style.color = "#fff"

    const bouncyCircle = new mojs.Shape({
        shape: 'circle',
        zIndex: 44,
        fill: "none",
        stroke: "#0676d1",
        radius: { 20: 80 },
        duration: 2000,
        isYoyo: true,
        isShowStart: true,
        easing: 'elastic.inout',
        repeat: 1,
    });
    var menu = document.getElementById('menu')
    menu.onmouseover = (e) => {
        e.preventDefalut();
        bouncyCircle.play()
    }

}
document.body.onchange((e) => {
    VANTA.BIRDS({
        el: "#header",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xe8f3fc,
        colorMode: "lerp"
    })
})
VANTA.BIRDS({
    el: "#header",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xe8f3fc,
    colorMode: "lerp"
})

pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
        zIndex: 1
    });

    timeline.to(".page-transition", {
        duration: 1,
        top: "0%",
        left: "-100%",
    });

    timeline.to(".page-transition", {
        duration: 2,
        // top: "100%",
        left: "100%",
        delay: .3
    });

    timeline.set(".page-transition", {
        left: "-100%"
    });
}

mainAnimation = () => {
    var timeline = gsap.timeline();

    timeline.from(".hero,  .logo", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: 2
    });
}

delay = (n) => {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                mainAnimation();
            },

            async once(data) {
                mainAnimation();
            }
        }
    ]
});

