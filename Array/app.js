/**
 * Array是Reference Data Type(他是指Variables是指向存放在記憶中所儲存的值，因此Variables實際上是沒有擁有此值是)
 */
let exhaustPipe = ["ARROW", "SCORPION", "AKRAPOVIC"];
let x = exhaustPipe;

//Reference Data Type
exhaustPipe.push("YOSHIMURA");
console.log(exhaustPipe);
console.log(x);

let scooters = ["Krv", "RacingS", "froce2.0", "mmbcu", "DRG"];

console.log(typeof scooters); //在js中array是object的一種
console.log(Array.isArray(scooters)); //在js中判斷array的方式

//index,length
console.log(scooters[0]);
console.log(scooters[1]);
console.log(scooters[2]);
console.log(scooters[3]);
console.log(scooters[4]);
console.log(scooters.length);

//push會在array尾端新增元素
scooters.push("RsNeo");
console.log(scooters);

//pop會刪除array最尾端的元素
scooters.pop();
console.log(scooters);

//shift會刪除array第一個元素
scooters.shift();
console.log(scooters);

//unshift會在array的第一個位置新增元素
scooters.unshift("krv");
console.log(scooters);

//forEach可以讓array內的每個元素都執行自己所定義的function
let lockeyNumbers = [20, 13, 55, 83, 96, 71];

lockeyNumbers.forEach((n, index) => {
  if (n > 50) {
    console.log(n + "in array index number is " + index);
  }
});

/* //另一種寫法
lockeyNumbers.forEach(checkNumber);
function checkNumber(n){
    if(n>50){
        console.log(n);
    }
} */

//array相加
let friends1 = ["Alvin", "Bob"];
let friends2 = ["Tom", "Boris"];
let friends = friends1.concat(friends2);
console.log(friends);

//用spread operator(...)把array串接的方法
let f = [...friends1, ...friends2];
console.log(f);

//map() function，會創造一個新的array
let languages = ["c++", "python", "php", "css", "html"];
let upperLang = languages.map((e) => {
  return e.toUpperCase();
});

console.log(upperLang);

/**
 * find() and filter() function
 *
 * arrayName.find(i =>{})：若使用find在array內找無符合的項目那會回傳undefined
 * arrayName.filter(i =>{})：若使用filter在array內找無符合的項目那會回傳一個空array
 */
let motor = [
  { name: "maxsymTL", hp: 45.6, torque: 5.09 },
  { name: "AK550", hp: 53.5, torque: 5.6 },
  { name: "TMAX560", hp: 47.6, torque: 5.68 },
];

let result1 = motor.find((i) => {
  return i.torque > 5.5; //會回傳array內第一個扭力大於5.5的
});
console.log(result1);

let result2 = motor.filter((i) => {
  return i.torque > 5.5; //會回傳array內所有扭力大於5.5的
});
console.log(result2);

/**
 * some() and every function
 *
 * arrayName.some(i =>{})：若使用some在array內有其中一個element有符合條件那會回傳true，反之回傳false
 * arrayName.every(i =>{})：若使用every在array內有其中一個element沒有符合條件那會回傳false，若都符合就會回傳true
 */
let result3 = motor.some((i) => {
  return i.hp > 50; //true
});
console.log(result3);

let result4 = motor.every((i) => {
  return i.hp > 50; //false
});
console.log(result4);

//sort() 按照字母大小排序
let foods = ["duck", "pork", "beef", "chicken"];
foods.sort();
console.log(foods);

//sort() 按照字串長度排序
let seaFoods = [
  "Seared Salmon",
  "Japanese Amberjack Stomach",
  "Seared Flatfish Side Meat",
  "Otoro",
];
seaFoods.sort((a, b) => {
  return a.length - b.length;
});
console.log(seaFoods);

//在array中排列number的方法
let nums = [10, -5, 34, 1, 77, 103, 992, 718];
nums.sort((a, b) => {
  return a - b;
});
console.log(nums);

//copy array
let games = ["rainbow six", "APEX", "overwatch2"];
let copyGames = [...games];
console.log(copyGames);
console.log(games === copyGames);
