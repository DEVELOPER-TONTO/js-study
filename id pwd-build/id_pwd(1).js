function btn1(){
    document.getElementsByClassName("ID-PWDTEXT")[0].innerHTML = "ID";
    document.getElementsByClassName("id-pwd")[0].style.display = "block";
}

function btn2(){
    document.getElementsByClassName("ID-PWDTEXT")[0].innerHTML = "PASSWORD";
    document.getElementsByClassName("id-pwd")[0].style.display = "block";
}

// function closing(){
//     document.getElementsByClassName("id-pwd")[0].style.display = "none"
// }

document.getElementsByClassName('shut-down')[0].addEventListener('click',function(){
    document.getElementsByClassName('id-pwd')[0].style.display="none";
});