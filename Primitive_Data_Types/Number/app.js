/**
 * 屬於Primitive Date Type(不是Object，因此沒有properties和methods):
 * 他是指Variables會得到存放在記憶中所儲存的值，若有其他的Variables也得到此值那也會得到此值(類似複製的概念)，並不是指向放在記憶中所儲存的值
 *
 * JavaScript有一個屬性叫coercion他可以在Primitive Date Type去使用properties和methods時會強制把它轉成object，等執行完後又將他轉回來
 */

let x = 15;

console.log(x.toString()); //此函式可以將number轉成string

let pi = 3.141596;

console.log(pi.toFixed(2)); //此函式可以選擇要保留多少位的小數點

//NaN和Infinitas是屬於number
let y = NaN;
let z = 5 / 0;
console.log(typeof y);
console.log(typeof z);

let q = isNaN(y); //要確認變數的值是否為NaN可以使用isNaN()
console.log(q);

console.log(Infinity / Infinity); //NaN
console.log(0 / 0); //NaN
console.log(Infinity * 0); //Nan
