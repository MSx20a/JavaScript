/**
 * 屬於Primitive Date Type(不是Object，因此沒有properties和methods):
 * 他是指Variables會得到存放在記憶中所儲存的值，若有其他的Variables也得到此值那也會得到此值(類似複製的概念)，並不是指向放在記憶中所儲存的值
 *
 * JavaScript有一個屬性叫coercion他可以在Primitive Date Type去使用properties和methods時會強制把它轉成object，等執行完後又將他轉回來
 */

let name = "Alvin";
console.log(name.length); //length可以計算string的長度，包含空格也會被計算進去

//讓輸出的字串自動分開的方法back-tick
console.log(`${name} is driver.`);

//string的index值式從0開始計算
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]); //如果index值超出字串長度會出現undefined

console.log(name.slice(2, 4)); //slice可以依照index值將string切斷；包含頭，但不含尾

console.log(name.indexOf("A")); //indexOf可以尋找string的index值，有區分大小寫

console.log(name.indexOf("lvi"));

let y = "Alvin is a rider";
console.log(y.indexOf("i")); //indexOf只會找到此string最一開始出現的index值
console.log(y.indexOf("z")); //若找不到會回傳-1

console.log(name.toUpperCase()); //toUpperCase會將string全部轉換成大寫
console.log(name.toLowerCase()); //toLowerCase會將string全部轉換成小寫

console.log(y.split(" ")); //split會將string以user想要的方式切開，並以array的方式呈現
console.log(y.split("i"));
console.log(name.split("")); //把所有字切開

//string比大小，只會比較string第一個字
console.log("5" > "10"); //ture
console.log("Apple" > "Banana"); //false
