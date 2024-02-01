var userNmeInfo = document.querySelector("#uName");
userNmeInfo.addEventListener("keypress", (event) => {
  var regex = /[a-zA-Z ]/;
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
});

var userName;
var saveButton = document.querySelector("#saveBtn");
userNmeInfo.addEventListener("focusout", () => {
  if (userNmeInfo.value == "") {
    saveButton.setAttribute("disabled", true);
  } else {
    saveButton.removeAttribute("disabled");
  }
});

saveButton.addEventListener("click", () => {
  userName = document.querySelector("#uName").value;
  localStorage.setItem("userName", userName);
  document.querySelector(".parentContainer").style.display = "block";
  sendingUserName();
});

var printName;
var sendingUserName = () => {
  printName = document.querySelector(".retValue");
  printName.innerHTML = localStorage.getItem("userName");
};

if (localStorage.getItem("userName") != null) {
  sendingUserName();
  document.querySelector(".parentContainer").style.display = "block";
  document.querySelector(".userInfo").style.display = "none";
}

// validation

// var contextMenu = document.querySelector('#contextMenu');
// contextMenu.addEventListener('contextemnu', (e) => {
//     e.preventDefault()
//     console.log("set");
// })

var changeData = document.querySelector(".changeBtn");
var loader;
var instruction;
changeData.addEventListener("click", () => {
  loader = document.querySelector(".paraClass");
  loader.innerText = "loading..👻";
  instruction = document.querySelector(".instruction");
  instruction.style.display = "none";
  changeData.innerHTML = "next";
  $.ajax({
    url: "https://hindi-jokes-api.onrender.com/jokes?api_key=3a8b8d1bce92a6bd6283e7a42bc9",
    dataType: "JSON",
    method: "GET",
    data: {},
    success: (response) => {
      var responseJoke = response.jokeContent;
      sendingJoke(responseJoke);
    },
    error: () => {
      console.log(error.statusCode);
      loader.innerText =
        "Some problem in loading data, try again sometime later";
    },
  });
});

var para;
var sendingJoke = (responseJoke) => {
  para = document.querySelector(".paraClass");
  para.innerHTML = responseJoke;
};

var greetingOfDay;
var reference = document.querySelector(".greeting");
var time = new Date().getHours();
if (time < 12) {
  reference.innerHTML = "Good Morning 🌅";
} else if (time >= 12 && time <= 17) {
  reference.innerHTML = "Good afternoon 🌇";
} else if (time >= 17 && time <= 20) {
  reference.innerHTML = "Good Evening 🌆";
} else {
  reference.innerHTML = "Good Night 🌚";
}