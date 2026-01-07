let head=document.querySelector("#myh1");
let headtext=document.querySelector("#p");
let btn=document. querySelectorAll(".button");
const now=new Date();
const date=now.getDate();
const month=now.toLocaleDateString('en-us',{
   month:'long'
});
const shortformat=now.toLocaleDateString('en-us',{
   dayPeriod:'short',
   month:'short',
   day:'numeric'
});
const arr=Array.from(btn);
console.log(arr[1].innerHTML);
 function cal(){
    head.textContent=month;
    console.log(head);
    headtext.textContent=shortformat;
    console.log(headtext);

 }
 cal();
//  arr.forEach(button => {
//     button.addEventListener("click",function(e){
//       function fun(){
//           button.textContent="p";
//           console.log(button)
//       }
//       if(arr[0].innerHTML==="1"){
//          fun();
//       }
//       else  if(arr[1].innerHTML==="2"){
//          fun();
//       }
//       else  if(arr[2].innerHTML==="3"){
//          fun();
//       }
//       else  if(arr[3].innerHTML==="4"){
//          fun();
//       }
//       else  if(arr[4].innerHTML==="5"){
//          fun();
//       }
//       else  if(arr[5].innerHTML==="6"){
//          fun();
//       }
//       else  if(arr[6].innerHTML==="7"){
//          fun();
//       }
//       else{
//          prompt("You Cannot do");
//       }
//     })
//  })
//   function pranali(btn){
// if(arr[])
//   }
// arr.forEach(button => {
//   button.addEventListener("click", function (e) {
//     const clickedValue = e.target.innerHTML;
//     function fun(){e.target.style.backgroundColor = "green";}
//     if (clickedValue >= 1 && clickedValue <= 31) {
//    // mark selected day
//        fun();
//     } else {
//       alert("Invalid day");
//     }
//   });
// });
