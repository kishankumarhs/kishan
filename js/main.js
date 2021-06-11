
 var tellMeMore =  document.getElementById('tellmemore');
 tellMeMore.onclick  =  ()=>{
         window.location = '#form'
     
 }
var s = document.getElementById('skills');
s.onmouseover = () => {
 if(window.innerWidth>=767){
    document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
        let circles = ciclegraph.querySelectorAll('.circle')
        let angle = 360 - 90, dangle = 360 / circles.length
        for (let i = 0; i < circles.length; ++i) {
            let circle = circles[i]
            angle += dangle
            circle.style.opacity=1
            circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
        }
    })
 }
}
s.onmouseleave = ()=>{
    if(window.innerWidth>=767)
    {
        document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
            let circles = ciclegraph.querySelectorAll('.circle')
            for (let i = 0; i < circles.length; ++i) {
                let circle = circles[i]
                circle.style.transform = `translate(-50%,-50%)`
                circle.style.zIndex=1
                circle.style.opacity=0
            }
        })
    }
 
}

