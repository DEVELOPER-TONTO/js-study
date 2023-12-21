//사람이름 찾기
let 출석부 = ['흥민','영희','철수','재석'];

function 이름찾기(이름){
    for(let i=0; i<=출석부.length; i++){
        if(이름 == 출석부[i]){
            return console.log('있어요');
        }
    }
}

이름찾기('영희');

//구구단
for(let j=2; j<=9; j++){
    for(let k=1; k<=9; k++){
        console.log(j*k);
    }
}

//평균 점수 계산기
let arrPlus = 0;
function 평균(평균아,지금점수){
    for(let u=0; u<평균아.length; u++){
        arrPlus = arrPlus + 평균아[u];
    }
    if(arrPlus/평균아.length > 지금점수){
        console.log(arrPlus/평균아.length - 지금점수 + "점만큼 떨어지셨네요");
    }
    if(arrPlus/평균아.length < 지금점수){
        console.log(지금점수 - arrPlus/평균아.length + "점만큼 오르셨네요");
    }
    else if(arrPlus/평균아.length == 지금점수){
        console.log("에");
    }
}

평균([60,70,80],90);