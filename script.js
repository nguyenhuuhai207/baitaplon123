// tìm kiếm

let search=document.getElementById("search");

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let foods=document.querySelectorAll(".food");

foods.forEach(function(food){

food.style.display=

food.innerText.toLowerCase().includes(value)

?

"block"

:

"none";

});

});

//lọc

let buttons=document.querySelectorAll(".filter");

buttons.forEach(function(btn){

btn.onclick=function(){

let category=this.dataset.category;

let foods=document.querySelectorAll(".food");

foods.forEach(function(food){

if(category=="all"){

food.style.display="block";

}

else{

food.style.display=

food.classList.contains(category)

?

"block"

:

"none";

}

});

}

});