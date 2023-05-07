let ans = Math.floor(Math.random() * 100); //Math.floor會回傳小於等於所給數字的最大整數；Math.random會產生一個介於0~1的數
console.log(ans);
let n1 = 1;
let n2 = 99;

while (true) {
  let x = prompt("請輸入你的猜測" + n1 + "~" + n2);
  if (Number(x) > n2 || Number(x) < n1) {
    alert("請輸入正確範圍的數字");
    continue; //輸入的數不在正確範圍，因此需跳過這次迴圈
  }
  if (ans == Number(x)) {
    alert("恭喜你猜對了");
    break; //猜中後就可以直接跳離此迴圈
  } else if (Number(x) > ans) {
    n2 = x;
  } else if (Number(x) < ans) {
    n1 = x;
  }
}
