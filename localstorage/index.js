const loginId = document.getElementById('id');
const loginPwd = document.getElementById('pwd');
const loginBtn = document.getElementById('login-btn');
const userBtn = document.getElementById('user-btn');
const userId = document.getElementById('userId');
const userPwd = document.getElementById('userPwd');

const userLoginInfo = JSON.parse(localStorage.getItem("userInfo"));

userId.innerHTML="<p>"+`${userLoginInfo.id}님 환영합니다!`+"</p>";

userBtn.addEventListener("click",()=>{
    alert("회원가입이 완료되셨습니다!");
    let userInfo = {id : loginId.value, pwd : loginPwd.value}
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    location.reload();
});

loginBtn.addEventListener('click',()=>{
    if(userLoginInfo.id == loginId.value && userLoginInfo.pwd == loginPwd.value){
        alert("로그인이 완료되셨습니다!");
        location.href = "do.html";
    }
    else{
        alert("다시입력하세요!");
    }
});