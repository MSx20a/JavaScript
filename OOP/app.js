let Rcs = {
  manufacturer: "kymco",
  displacement: 189,
  hp: 19.47,
  Nm: 1.45,
  weight: 130,
  oilBox: 5.7,
  performance() {
    return "Rcs top speed 130km/hr";
  },
  energyConsumption() {
    return "Rcs average 28km of 1l oil.";
  },
  power() {
    console.log(this); //Rcs object
    return (
      "Rcs horsepower have " + this.hp + "hp and torque have " + this.Nm + "kg." //this是指object，因此可以使用其屬性
    );
  },
  ride: () => {
    console.log(this); //Window Object
    return this.weight + "is a little heavy.";
  },
};

//以下2種方式可以取得Rcs object內的屬性值
console.log(Rcs["hp"]);
console.log(Rcs.hp);

console.log(Rcs.performance);
console.log(Rcs.performance());
console.log(Rcs.power());
console.log(Rcs.ride()); //在JavaScript中Arrow function裡的this是屬於Window Object，因此在寫Object中的Method不會使用Arrow function

//可以用for loop將裡面的屬性取出來
for (let i in Rcs) {
  console.log(i + "=" + Rcs[i]);
}

//destrucying an object
let { hp, Nm } = Rcs;
console.log("Rcs horsepower have " + hp + "hp and torque have " + Nm + "kg.");

/**
 * Constructor Function(構築函式)
 * 製作大量相似object
 * 命名規則：
 * 1.第一個字母需大寫
 * 2.需用"new"關鍵字
 */
function Car(name, hp, kgm, weight) {
  console.log(this);
  (this.name = name),
    (this.hp = hp),
    (this.kgm = kgm),
    (this.weight = weight),
    (this.color = function () {
      //創建的每個object底下都會有color function，因此會占用較多的ram
      console.log("blue,yellow,red,black");
    });
}

let swift = new Car("swift", 129, 23.9, 999);

swift.color();

//所有的object會指向到prototype內的properties和methods，因此可以節省記憶體
Car.prototype.speed = function () {
  console.log(this.name + " top speed have 220km.");
};

console.log(swift);

//object可以直接使用此function，從prototype inheritance
swift.speed();
console.log("--------------");

//bind會回傳一個綁定this的函數
let Alvin = {
  name: "AlvinChen",
  age: 28,
};

function getAge(country, height) {
  console.log(
    "I am come from" +
      country +
      ",and" +
      height +
      "tall." +
      this.age +
      "years old."
  ); //這裡的this指的是window object
}

let result = getAge.bind(Alvin);
result();

//call
//getAge.call(Alvin,Taiwan,168);

//apply
//getAge.apply(Alvin,[Taiwan,168]);
console.log("-----------------");

//Prototype Inheritance
function Person(name, age, height, weight) {
  (this.name = name),
    (this.age = age),
    (this.height = height),
    (this.weight = weight);
}

Person.prototype.sayHi = function () {
  console.log(this.name + " say hello.");
};

function Student(name, age, height, weight, magir, grade) {
  //這裡的this指的是Student
  Person.call(this, name, age, height, weight);
  (this.magir = magir), (this.grade = grade);
}

//此方式可以讓Student inheritance Person prototype
Student.prototype = Object.create(Person.prototype);

let Tom = new Student("Tom", 31, 175, 80, "python", 90);
console.log(Tom);
Tom.sayHi();
console.log("-----------------");

//class在2015年的時候推出屬於比較新的語法，可閱讀性較高
class Motor {
  //constructor function
  constructor(name, hp, torque) {
    (this.name = name), (this.hp = hp), (this.torque = torque);
  }
  heighspeed() {
    console.log(this.name + "極速可以輕鬆突破140km.");
  }
}

let ak550 = new Motor("AK550", "53.5", "5.6");
console.log(ak550);
ak550.heighspeed();

//class inheritance
class Scooter extends Motor {
  constructor(name, hp, torque) {
    //這裡的super指的是super set(母集合)
    super(name, hp, torque);
  }
  speed() {
    console.log(this.name + "極速可以輕鬆突破80km.");
  }
}

let krv = new Scooter("Krv", 16, 1.6);
console.log(krv);
krv.speed();
krv.heighspeed();
console.log("-----------------");

/**
 * static properties and methods
 * 只要把任何一個的properties和method設成static就會屬於所設定的class(物件)
 */
class Circle {
  static pi = 3.141596; //static properties
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Circle.pi;
  }
  //圓周長
  getPerimeter() {
    return 2 * Circle.pi * this.radius;
  }
  //static methods
  static getAreaFormula() {
    console.log("r * r * " + Circle.pi);
  }
}

let c1 = new Circle(120);
console.log(c1.getArea());
console.log(c1.getPerimeter());
Circle.getAreaFormula(); //getAreaFormula()以設定為static因此是屬於Circle而非c1
