
// let x=document.querySelector("h2");
// x.style.fontStyle="italic";
// x.style.color="Lili ";
// setTimeout(function(){
//     x.innerHTML="Pranali";
//     x.style.color="red";
// },4000)
// let y=document.getElementById("bj");
//  y.innerHTML="Happy birthday Suhas";
// setTimeout(function(){
//     y.style.color="red";
// }, 5000)
let a=document.getElementById("btn1");
let p=document.getElementById("btn");
// p.addEventListener("click",function(){
//    a.style.color="yellow";
//    a.style.backgroundColor="red";
//    a.innerHTML="Beutifull";
//    a.style.backgroundColor
   
// })
p.addEventListener("mouseover",function(){
    let r=Math.floor(Math.random()*100);
    p.innerHTML=`<h1>${r}</h1>`;
  
})
p.addEventListener("mouseleave", function(){
     let r=Math.floor(Math.random()*100);
    p.innerHTML=`<h1>${r}</h1>`;
     let  a=Math.floor(Math.random()*256);
    let   b=Math.floor(Math.random()*256);
    let   c=Math.floor(Math.random()*256);
    p.style.backgroundColor=`rgb(${a} , ${b} ,  ${c})`;


})
 let input =document.querySelector("input");
 console.log(input.type);
 console.log(input.value);
 const h1 =document.createElement("h1");
 const body=document.body;
 h1.textContent="hello world";
 console.log(h1.textContent);
 body.appendChild(h1);

  