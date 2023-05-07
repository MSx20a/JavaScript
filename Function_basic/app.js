function sayHi() {
  console.log("Hi,This a function.");
}

sayHi();

let x = prompt("請輸入溫度(°C)：");
console.log(typeof x); //使用prompt輸入的值一率都為string
function calculate(x) {
  return x * 1.8 + 32;
}

let result = alert("換算後的溫度為 : " + calculate(x) + "°F");
//console.log(result);

/**array function
 * 和一般function不同的點在於不能先執行函式在定義函式
 * 在JavaScript中Arrow function裡的this是屬於Window Object而不是object本身，因此在建立Object中的Method不會使用Arrow function
 */
let addition = (x, y) => {
  return x + y;
};

console.log(addition(3, 6));

let lockeyNumbers = [20, 13, 55, 83, 96, 71];

//anonymous function匿名函式
lockeyNumbers.forEach((n) => {
  if (n > 50) {
    console.log(n);
  }
});

//定義有n個parameter方法
function checkBiggest(...numbers) {
  console.log(numbers);
  console.log(typeof numbers);
  let bigOne = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > bigOne) {
      bigOne = numbers[i];
    }
  }
  return bigOne;
}

console.log(checkBiggest(-50, 45, 199, 23, -4, 331));

/**
 * 如果在function未給Parameter值，那預設是undefined
 *
 * 幫函式預設值的方法，直接在varibile做設定
 * function combine(a=1,b=1){}
 */

/**
 * IIFE,Immediately Invoked Function Expression
 * 通常在js的library source code
 */
(function(a, b) {
  console.log(a / b);
})(6, 9);
