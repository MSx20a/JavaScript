//window object and Element object都能使用addEventListener(event type,callback)
//js的event都是object

//window object
// window.addEventListener("click",(e)=>{
//     console.log(typeof e);
//     console.log(e); //e指的是"click"這個event
// });

let h1 = document.querySelector("h1");
h1.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});

let button1 = document.querySelector("button");
button1.style.backgroundColor = "black"; //inline style會蓋掉原本css的設定
button1.style.color = "white";
button1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
});

//Event Bullbing：當a和自己的父元素b都有event時那執行a的event就會同時觸發b的event
let a = document.querySelector("div.a");
let b = document.querySelector("div.b");

a.addEventListener("click", (e) => {
  alert("a's event listener's callback is running.");
});
b.addEventListener("click", (e) => {
  //e.stopPropagation();  //停止event bubbling可以使用stopPropagation()
  alert("b's event listener's callback is running.");
});
