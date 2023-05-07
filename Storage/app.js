/**
 * localStorage和sessionStorage的介紹，他們有四種methods
 * setItem(key,value)
 * getItem(key)
 * removeItem(key)
 * clear()
 */

//將key加想要儲存的stringt儲存至storage中
localStorage.setItem("manufacturer","kymco");
localStorage.setItem("displacement","189cc");
localStorage.setItem("hp","19.47hp");
localStorage.setItem("Nm","1.45kgm");
localStorage.setItem("weight","128kg");
localStorage.setItem("oilBox","5.7L");

//將storage的資料取出
let hp=localStorage.getItem("hp");
console.log(hp);

//localStorage.clear()

//將存進去的資料轉變成string的方式
let friends=["Tom","Robert","Melo","Shuan"];
localStorage.setItem("friends",JSON.stringify(friends));


//將取出的資料轉為array型態以便處理
let ans=JSON.parse(localStorage.getItem("friends"));
console.log(ans);