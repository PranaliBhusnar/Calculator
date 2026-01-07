let input=document.getElementById("input");
let submit=document.getElementById("submit")
let h=document.getElementById("myh3");
let radius;
const PI=3.142;
submit.addEventListener("click", function(e){
    radius=input.value;
    let area=2*radius*radius*PI;
    h.textContent= `Area of Circle is ${area}sq`;
   
    console.log(h);

})