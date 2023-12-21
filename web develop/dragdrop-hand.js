//get 요청으로 상품만들기

let products = [];
let cart = [];



$.get("store.json").then((data) => {
  
  products = data.products;
  
  products.forEach(function (a, i) {
    $(".drag-con" ).append(`<div class="drag-box">
  <a href="#" class="card">
  <div class="thumb" style="background-image: url(${a.photo});" data-id="${a.id}" draggable="true"></div>
  <article>
      <h1>${a.title}</h1>
      <p>${a.brand}</p>
      <span>${a.price}</span>
      <button class="cart" data-id="${a.id}">담기</button>
  </article>
  </a>
  </div>`);
  });
  
  
  // document.querySelector('.cart').addEventListener('click',function{
    
  // });
});

//786px일경우 토글버튼생성후 동작

document.querySelector('.h_togglebtn').addEventListener('click',function(){
  document.querySelector('.menu').classList.toggle('active'); 
});




