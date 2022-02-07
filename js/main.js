
document.body.onload = () => {

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
    let year = document.getElementById("year");
    let currentYear = new Date().getFullYear();
    year.innerHTML = currentYear;
    year.style.margin = "0px 5px"
    year.style.color = "#fff"

    var menu = document.getElementById('menu');
    var open = false;

    if (menu) {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementsByClassName("menu-items")[0].style.left = open ? "-100%" : 0
            // document.getElementsByClassName("fa-times")[0].style.display = open ? 'block' : "none"
            // document.getElementsByClassName("fa-bars")[0].style.display = open ? 'block' : "none"
            open = !open
        })
    }
    var s = document.getElementById('skills');
    if (s) {
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

    }
}



pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to("header", {
        zIndex: 1
    });

    timeline.to(".page-transition", {
        duration: 1,
        height: "100%",
        top: "0%"
    });

    timeline.to(".page-transition", {
        duration: .8,
        height: "100%",
        top: "100%",
        delay: .3
    });

    timeline.set(".page-transition", {
        top: "-100%"
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
        delay: .8
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
// barba.use(barbaCss);

// barba.init({
//     transitions: [{
//         once: () => { }
//     }]
// })
// barba.init({
//     sync: true,
//     transitions: [
//         {
//             async leave(data) {
//                 const done = this.async();
//                 pageTransition();
//                 await delay(1000);
//                 done();
//             },

//             async enter(data) {
//                 mainAnimation();
//             },

//             async once(data) {
//                 mainAnimation();
//             }
//         }
//     ]
// });

