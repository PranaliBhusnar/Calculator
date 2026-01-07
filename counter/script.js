let h=document.getElementById("myh1");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let a;
 a=h.innerText;
 a=Number(a);
btn1.addEventListener("click" ,function(e){
    a=a-1;
    h.textContent=a;
    console.log(h);
    
});
btn2.addEventListener("click" ,function(e){
    a=0;
    h.textContent=a;
    console.log(a);
});
 btn3.addEventListener("click" ,function(e){
    a=a+1;
    h.textContent=a;
    console.log(a);
});