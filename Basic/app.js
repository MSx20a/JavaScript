console.log("目前正在學習js");

/**
 * 在js中不可以重複宣告
 * Ex:
 *    let x=6
 *    Let x=8
 * 這種情況就會出現Uncaught TypeError
 */
let x = 5; //用let宣告的變數可以再重新賦值
x = 7;
console.log(x);

const y = 2; //用const宣告的變數無法再重新賦值，否則會出現Uncaught TypeError
//y = 1
console.log(y);

//運算式
console.log(101 + 77);
console.log(43 - 88);
console.log(28 / 11);
console.log(34 * 13);
console.log(45 % 8); //取餘數
console.log(71 ** 4); //次方

console.log(x++); //x = x + 1
console.log((x += 3)); //x = x + 3
console.log((x *= 2));
console.log((x /= 4));


/**
 * 在JavaScript中字串只能用+(加號)來做運算，也可以+數字；*、/、-均會使其執行後出現NaN(Not a Number)
 * let name = Alvin
 * console.log(name-6)
 */