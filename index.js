// validation
var userNmeInfo = document.querySelector("#uName");
userNmeInfo.addEventListener("keypress", (event) => {
  var regex = /[a-zA-Z ]/;
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
});

// stoping user for inspecting value
// var contextMenu = document.querySelector("#contextMenu");
// contextMenu.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
//   alert("You can't inspect");
// });

// contextMenu.addEventListener(
//   "keydown",
//   function (event) {
//     if (event.ctrlKey && (event.keyCode == 85 || event.keyCode == 73)) {
//       event.preventDefault();
//       alert("You can't inspect");
//     }
//   },
//   false
// );

// validating user if text field is empty then not able to click on the button
var userName;
var saveButton = document.querySelector("#saveBtn");
userNmeInfo.addEventListener("focusout", () => {
  if (userNmeInfo.value == "") {
    saveButton.setAttribute("disabled", true);
  } else {
    saveButton.removeAttribute("disabled");
  }
});

// getting user name and saving in localstorage
saveButton.addEventListener("click", () => {
  userName = document.querySelector("#uName").value;
  localStorage.setItem("userName", userName);
  document.querySelector(".parentContainer").style.display = "block";
  sendingUserName();
});

// printing the user name into the containerParent div
var printName;
var sendingUserName = () => {
  document.querySelector(".userInfo").style.display = "none";
  printName = document.querySelector(".retValue");
  printName.innerHTML = localStorage.getItem("userName");
};

// validating if localstorage have user data then don't need to do take input
if (localStorage.getItem("userName") != null) {
  sendingUserName();
  document.querySelector(".parentContainer").style.display = "block";
  document.querySelector(".userInfo").style.display = "none";
}

// api calling and adding some validation
var loader;
var instruction;
var changeData = document.querySelector(".changeBtn");
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
    error: (error) => {
      console.log(error);
      loader.innerText =
        "Some problem in loading data, try again sometime later";
      if (error) {
        changeData.setAttribute("disabled", true);
      } else {
        changeData.removeAttribute("disabled");
      }
    },
  });
});

// adding jokes in the parent container
var para;
var sendingJoke = (responseJoke) => {
  para = document.querySelector(".paraClass");
  para.innerHTML = responseJoke;
};

// greeting user by his localstorage data
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