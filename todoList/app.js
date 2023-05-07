let section = document.querySelector("section");
let add = document.querySelector("form.main button");
//console.log(add);
add.addEventListener("click", (e) => {
  e.preventDefault(); //避免按下button後form送出
  //取得輸入後的值
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoHour = form.children[1].value;
  let todoMinute = form.children[2].value;

  let re = /0+/; //regex

  if (todoText == "") {
    alert("請輸入代辦事項");
    //使用return使其不要繼續執行以下的callback function
    return;
  } else if (todoHour == "" || todoMinute == "") {
    alert("請輸入時間");
    return;
  } else if (Number(todoHour) < 0 || Number(todoHour) > 24) {
    form.children[1].value = "";
    alert("請輸入0~24區間的小時");
    return;
  } else if (Number(todoMinute) < 0 || Number(todoMinute) > 60) {
    form.children[2].value = "";
    alert("請輸入0~60區間的分鐘");
    return;
    //處理再輸入分鐘誤輸入很多個0的情況
  } else if (re.test(todoMinute) == true) {
    todoMinute = "00";
    form.children[2].value = "";
  }

  let todo = document.createElement("div");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;
  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerText = todoHour + ":" + todoMinute;
  todo.appendChild(text);
  todo.appendChild(time);
  section.appendChild(todo);

  //設定新增便簽時的動畫；整個<div>都要執行scaleUp動畫
  todo.style.animation = "scaleUp 0.6s forwards";

  //把輸入框內的內容及時間清空
  form.children[0].value = "";
  form.children[1].value = "";
  form.children[2].value = "";

  let complateButton = document.createElement("button");
  complateButton.classList.add("complate");
  complateButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'; //使用Font Awesome上打勾icon
  complateButton.addEventListener("click", (e) => {
    let complateItem = e.target.parentElement;
    let text = complateItem.children[0].innerText;
    let checkDone = complateItem.classList.toggle("done"); //toggle會判斷當前所選擇的element內如果有該輸入的class就會移除，反之就會新增；因此可以達成如不小心刪掉代辦事項又可以在還原的功能
    let myList = localStorage.getItem("list");
    let myListArray = JSON.parse(myList);
    //將是否完成的便簽狀態儲存至myTodo object內
    myListArray.forEach((item) => {
      if (item.todoText == text) {
        //用來比對是否為此筆資料為完成
        item.status = checkDone;
        localStorage.setItem("list", JSON.stringify(myListArray));
      }
    });
  });

  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'; //使用Font Awesome上的垃圾桶icon
  trashButton.addEventListener("click", (e) => {
    let trashItem = e.target.parentElement;
    trashItem.style.animation = "scaleDown 0.5s forwards"; //整個<div>都要執行scaleDown動畫
    //HTML DOM Events  "animationend"可以設定動畫結束後要做什麼；如果不新增此event直接remove會造成動畫還沒跑完便簽就被移除
    trashItem.addEventListener("animationend", () => {
      let text = trashItem.children[0].innerText;
      let myList = localStorage.getItem("list");
      let myListArray = JSON.parse(myList);
      myListArray.forEach((item, index) => {
        if (item.todoText == text) {
          //splice是用於array內要刪除指定的[項]，裡面第一個index代表起始項,後面的值代表要移除多少個
          myListArray.splice(index, 1);
          localStorage.setItem("list", JSON.stringify(myListArray));
        }
      });
      trashItem.remove();
    });
  });
  todo.appendChild(complateButton);
  todo.appendChild(trashButton);

  //新增一個object為myTodo
  let myTodo = {
    todoText: todoText,
    todoHour: todoHour,
    todoMinute: todoMinute,
    status: false,
  };

  //把剛剛創建好的myTodo存入localStorage
  let myList = localStorage.getItem("list");
  //當localStorage裡沒有任何東西時console會得到null
  if (myList == null) {
    //這裡把存進去的myTodo用[]框起來，那到時再用array取出來就是完整的一個項
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArray));
  }
  console.log(JSON.parse(localStorage.getItem("list")));
});

loadDate();

//loadDate用來重新開起頁面時把localStorage顯示出來
function loadDate() {
  //重新整理時若input有值也清空
  form = add.parentElement;
  form.children[0].value = "";
  form.children[1].value = "";
  form.children[2].value = "";

  let myList = localStorage.getItem("list");
  if (myList != null) {
    let myListArray = JSON.parse(myList);
    //把myListArray內的每筆資料都抓出來處理
    myListArray.forEach((item) => {
      let todo = document.createElement("div");
      todo.classList.add("todo");
      let text = document.createElement("p");
      text.classList.add("todo-text");
      text.innerText = item.todoText;
      let time = document.createElement("p");
      time.classList.add("todo-time");
      time.innerText = item.todoHour + ":" + item.todoMinute;
      todo.appendChild(text);
      todo.appendChild(time);
      if (item.status == true) {
        todo.classList.add("done");
      }

      let complateButton = document.createElement("button");
      complateButton.classList.add("complate");
      complateButton.innerHTML =
        '<i class="fa fa-check" aria-hidden="true"></i>';
      complateButton.addEventListener("click", (e) => {
        let complateItem = e.target.parentElement;
        let text = complateItem.children[0].innerText;
        //toggle會判斷當前所選擇的element內如果有該輸入的class就會移除，反之就會新增；因此可以達成如不小心刪掉代辦事項又可以在還原的功能
        let checkDone = complateItem.classList.toggle("done");
        let myList = localStorage.getItem("list");
        let myListArray = JSON.parse(myList);
        //將是否完成的便簽狀態儲存至myTodo object內
        myListArray.forEach((item) => {
          if (item.todoText == text) {
            //用來比對是否為此筆資料為完成
            item.status = checkDone;
            localStorage.setItem("list", JSON.stringify(myListArray));
          }
        });
      });
      let trashButton = document.createElement("button");
      trashButton.classList.add("trash");
      trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      trashButton.addEventListener("click", (e) => {
        let trashItem = e.target.parentElement;
        trashItem.style.animation = "scaleDown 0.5s forwards";
        //新增一個event用來設定動畫結束後執行移除便簽，如果不新增此event直接remove會造成動畫還沒跑完便簽就被移除
        trashItem.addEventListener("animationend", () => {
          //trashItem目前是在<div>因此他的children有<p class:todo-text>,<p class:todo-time>,<complateButton>,<trashButton>共4個
          let text = trashItem.children[0].innerText;
          let myList = localStorage.getItem("list");
          let myListArray = JSON.parse(myList);
          //此forEach用來設定刪除的標籤功能
          myListArray.forEach((item, index) => {
            if (item.todoText == text) {
              //splice是用於array內要刪除指定的[項]，裡面第一個index代表起始項,後面的值代表要移除多少個
              myListArray.splice(index, 1);
              localStorage.setItem("list", JSON.stringify(myListArray));
            }
          });
          trashItem.remove();
        });
      });
      todo.appendChild(complateButton);
      todo.appendChild(trashButton);

      section.appendChild(todo);
    });
  }
}