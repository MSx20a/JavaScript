//window object
let i = prompt("姓名"); //會跳出輸入框與使用者互動

alert(i + "目前正在index.html的文件中");

function sayHi() {
  console.log("hi");
  console.warn("這是警告");
  console.error("這是錯誤");
}

//HTMLCollection
//let secondElemrnt=document.getElementsByClassName("frist");

//NodeList
let secondQuery = document.querySelectorAll(".frist");
secondQuery.forEach((tag) => {
  console.log(tag);
});

//querySelector remove() method
let rh3 = document.querySelector("h3");
rh3.remove();

//Document Object和Element Object都可以使用querySelectAll()和querySelect()這2個method
let section = document.querySelector("section");
let second = section.querySelectorAll(".secondContent"); //裡面的section就是Element Object
//此code內有三個class="secondContent"，但用Element Object就可以只找到此元素內class="secondContent"的元素
console.log(second);

let body = document.querySelector("body");
console.log(body.children); //return HTMLCollection
console.log(body.childNodes); //return NodeList
console.log(body.parentElement);
console.log(body.classList);

//38~47為在body tag內建立html element方式
let myp = document.createElement("p");
myp.classList.add("secondContent");
/**
 * classList有4種method：
 * add,remove：新增,移除 class
 * toggle：他會判斷當前所選擇的element內如果有該輸入的class就會移除，反之就會新增
 * contains：他會回傳一個boolean,如果所選擇的element有包含這個class=>true,反之false
 */
myp.innerText = "這是使用JS建立的";
body.appendChild(myp);

let test1 = document.querySelector("h2.test1");
console.log(test1);
//innerHTML和innerText非常類似,唯一不同的就是innerHTML會將裡面的String當成HTML的Code來閱讀
test1.innerText = "這部份很重要 with innerText.";

let test2 = document.querySelector("h1.test2");
test2.innerHTML =
  "<mark>" + i + "<mark>" + "<mark>的DOM筆記 with innerHTML.<mark>";

let x = setInterval(sayHi, 2000); //可以讓一個函式間格多少秒執行一次，setlnterval(函式名稱,秒數)

function stop() {
  clearInterval(x); //可以停止setInterval
}

let a = document.querySelector("body a");
console.log(a.getAttribute("href"));
