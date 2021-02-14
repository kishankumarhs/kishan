window.onload = () => {
    AOS.init()
 console.log(window.innerWidth)
          setTimeout(()=>{
            var loader= document.getElementsByClassName('loader');
            loader[0].style.display="none"
          },[1000])
    //    if(window.innerWidth>=320 && window.innerWidth <=376){
    //        $('.abt_img_holder').css('display','none');
    //    }
    var h1 = document.getElementsByTagName('h1')

    var i = document.getElementsByClassName("button_holder");
    i[0].addEventListener('click', () => {
        window.location = '#About'
    })
    var intro = document.getElementById("intro");
    var intro_data = intro.getAttribute('data-intro');
    var a = 0;
    var remove = intro_data.length;
    var inter = setInterval(() => {
        if (a >= 0 && a < intro_data.length) {
            let e = intro_data[a];
            var newSpan = document.createElement('span');
            newSpan.className = 'in';
            intro.appendChild(newSpan);
            newSpan.innerHTML = e;
            a += 1;

        }
        else {
            intro.innerHTML = ''
            a = 0;
        }


    }, [300])
   

    document.body.onscroll = () => {
        var goUp = document.getElementById('goUp');
        if (window.scrollY === window.innerWidth) {
            goUp.style.display = 'block'
        }
    }
    var bar1 = document.getElementsByClassName('ldbar')[0]
    var progressBarInner = document.getElementsByClassName('progress_inner');
    progressBarInner[0].DOCUMENT_POSITION_CONTAINED_BY
    // document.onscroll = () => {
    //     $(window).scroll(function () {
    //         var offset = $('.progressBar').offset();
    //         if (window.pageYOffset <= offset.top) {
    //             alert('hello')
    //         }
    //     });

    // }
    var skill = $('.skill');
    skill.mouseover(function () {
        $('.skill::before').css({
            "transform": 'scale(15)'
        })
    });
}
 function onloads(){
        document.getElementById('loader').style.display = 'none';
}

$(function () {
    if(window,innerWidth >=700 && window.innerWidth <= 1024){
        document.getElementById('web').innerHTML='web';

    }
    var goto= $(window);
    goto.scroll(function () {
        if (window.pageYOffset > window.innerHeight + 20) {
            $('#goUp').css('display', 'flex');
        } else {
            $('#goUp').css('display', 'none')
        }

    });

    $('#goUp').click(function (e) {
        e.preventDefault();
        window.scrollTo(0, 0)
    });
    var python = $('#python');
    var php = $('#php');
    var js = $('#js');
    var web = $('#web');
    var Android = $('#android');
    var Progress = $('.progress_inner');
    var h1 = $('.skill_h1');
    var frameworks= $('.frameworks');
    document.getElementsByClassName('progressbar_holder').onload = () => {
        $('.progress_inner').css('width', '90%');

    }
    python.click((e) => {
        e.preventDefault();
        h1.text('Python')
        $('.skill_img img').attr('src', 'static/python.png');
        $('.progress_inner').css('width', '90%');
        $('.progress_inner p ').text('90%')
        frameworks.html(` 
        <h1>Django</h1>
        <h1>Numpy</h1>
        <h1>PandaCV</h1>
        <h1>BeatifullSoup</h1>
        <H1>Scrapy</H1>
        `)

    })
    php.click((e) => {
        e.preventDefault();
        h1.text('PHP')
        $('.skill_img img').attr('src', 'static/php.png');
        $('.skill_img img').set
        $('.progress_inner p ').text('80%')
        $('.progress_inner').css('width', '80%');
        frameworks.html(` 
        <h1>WordPress</h1>
        <h1>Backend</h1>
        <h1>Laravel</h1>
        <h1>CakePHP</h1>
        `)


    })
    web.click((e) => {
        e.preventDefault();
        h1.text('Web Development')
        $('.skill_img img').attr('src', 'static/web.png');

        $('.progress_inner').css('width', '95%');
        $('.progress_inner p ').text('95%');
        frameworks.html(` <h1>Html</h1>
        <h1>Css</h1>
        <h1>Js</h1>
        <h1>Jquery</h1>
        <h1>Bootstrap</h1>
        <h1>ReactJs</h1>
        `)

    })
    Android.click((e) => {
        e.preventDefault();
        h1.text('Android')
        // $('#simg').attr('src', null);

        $('.skill_img img').attr('src', 'static/android.png');
        
        $('.progress_inner').css('width', '60%');
        $('.progress_inner p ').text('60%')
        frameworks.html(` <h1>Android</h1>
        <h1>Ios</h1>
        <h1>React Native</h1>
        `)

    })
    js.click((e) => {
        e.preventDefault();
        h1.text('JavaScript')
        $('.skill_img img').attr('src', 'static/js.png');

        $('.progress_inner').css('width', '92%');
        $('.progress_inner p ').text('92%');
        frameworks.html(`
        <h1>NodeJs</h1>
        <h1>ReactJS</h1>
        <h1>Jquery</h1>
        <h1>React Native</h1>
        <h1>P5 Js</h1>
        `)

    })
});
