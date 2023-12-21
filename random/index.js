const wrap = document.querySelector("#wrap");
    const lottoBtn = wrap.querySelector(".lottobtn");
    const lottoNum = wrap.querySelector(".lottonum");
    const lottocolor = wrap.querySelectorAll(".lottonum .num_color");
    const lottonumLength = wrap.querySelectorAll(".num_color .num");

    lottoBtn.addEventListener("click", function(){
        let set = new Set();
        for(i=0; i<6; i++){
            set.add(Math.floor(Math.random() * 45) + 1)
        }

        let randomNum = Array.from(set)
        randomNum.forEach((num,i) => {
            console.log(num);

            if(num <= 10){
                lottocolor[i].style.background = "#f8ec3e";
            } else if (num <= 20){
                lottocolor[i].style.background = "#2947f3";
            } else if (num <= 30){
                lottocolor[i].style.background = "#f84848";
            } else if (num <= 40){
                lottocolor[i].style.background = "#252525";
            } else {
                lottocolor[i].style.background = "#037e03";
            }  
            lottonumLength[i].innerHTML = num;
            lottonumLength[i].style.background = "#fff";
        });
    });