window.addEventListener('scroll',function(){
    
    //$(window).scrollTop();
    //520 ~ 860
    let fadeStart1 = 520;
    let fadeUntil = 10000;
    let offset = window.scrollY;


    if(offset<=fadeStart1){
        document.querySelectorAll('.card-box')[0].style.opacity = 1;
        document.querySelectorAll('.card-box')[0].style.transform = `scale(1)`;
    }
    else if(offset>fadeStart1){
        document.querySelectorAll('.card-box')[0].style.opacity = 1-offset/fadeUntil;
        document.querySelectorAll('.card-box')[0].style.transform = `scale(${1-offset/fadeUntil})`;
    }
});