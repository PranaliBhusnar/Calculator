// const win = document.querySelector(".win");
// let input=document.getElementById("input");
// console.log(win);
// console.log(input);
// let max;
// let number;
// let guess;

//   max=Number(prompt("Please enter the maximum nuber:"));
//   // console.log("Random number:",max);

//   while(true){
//     if(!isNaN(max) && max>0){
//         break;
//     }
//     else{
//       alert("Please enter the valide positive number");
      
//     }
//     max=Number(prompt("Please enter the maximum nuber:"));
//   }

// number=Math.floor(Math.random()*max)+1;
// console.log("Random number:",number);


// input.addEventListener("change", () => {
//   input.value="";
//   const guess = Number(input.value);

//   if (isNaN(guess)) {
//     alert("Please enter a number");
//     input.value = "";
//     return;
//   }

//   if (guess === number) {
//     win.textContent = "You win the Game ❤️🎉🎊";
//   } 
//   else if (guess > number) {
//     alert("Too high! Try a smaller number");
//   } 
//   else {
//     alert("Too low! Try a bigger number");
//   }

//   input.value = "";
// });
console.dir(document );
console.dir(document.location);
console.dir(document.documentURI);