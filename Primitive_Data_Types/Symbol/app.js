/**
 * 屬於Primitive Date Type(不是Object，因此沒有properties和methods):
 * 他是指Variables會得到存放在記憶中所儲存的值，若有其他的Variables也得到此值那也會得到此值(類似複製的概念)，並不是指向放在記憶中所儲存的值
 * 
 * JavaScript有一個屬性叫coercion他可以在Primitive Date Type去使用properties和methods時會強制把它轉成object，等執行完後又將他轉回來
 */

let x = Symbol();
console.log(x);
