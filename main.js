
 var tellMeMore =  document.getElementById('tellmemore');
 tellMeMore.onclick  =  ()=>{
         window.location = '#form'
     
 }
var s = document.getElementById('skills');
s.onmouseover = () => {
 // alert ('over')
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
//   else{
//     document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
//         let circles = ciclegraph.querySelectorAll('.circle')
//         let angle = 360-100, dangle = 360 / circles.length
//         for (let i = 0; i < circles.length; ++i) {
//             let circle = circles[i]
//             angle += dangle
//             circle.style.opacity=1
//             circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /2.5}px) rotate(-${angle}deg)`
//         }
//     })
//   }
 
}
// s.onmouseleave = ()=>{
//  // alert('leave')
//  document.querySelectorAll('.ciclegraph').forEach((ciclegraph) => {
//      let circles = ciclegraph.querySelectorAll('.circle')
//      let angle = 360 - 90, dangle = 360 / circles.length
//      for (let i = 0; i < circles.length; ++i) {
//          let circle = circles[i]
//          // angle += dangle
//          circle.style.transform = `translate(-50%,-50%)`
//          circle.style.zIndex=1
//          circle.style.opacity=0
//      }
//  })
// }

var intro = document.getElementById("intro");
    var intro_data = intro.getAttribute('data-intro');
    var a = 0;
    var remove = intro_data.length;
   var text = '' 
    var inter = setInterval(() => {
        if (a >= 0 && a < intro_data.length) {
            let e = intro_data[a];
              text += e
            intro.innerText = text
            // var newSpan = document.createElement('span');
            // newSpan.className = 'in';
            // intro.appendChild(newSpan);
            // newSpan.innerHTML = e;
            a += 1;

        }
        else {
            intro.innerHTML = ''
            a = 0;
            text=''
        }


    }, [500])
