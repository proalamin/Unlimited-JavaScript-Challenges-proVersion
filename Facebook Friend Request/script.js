console.log("ok");

var statusInfo = document.getElementById("statusInfo");
var addBtn = document.getElementById("addBtn");
// var removeBtn=document.getElementById('removeBtn');

var checkValue = 0;

addBtn.addEventListener("click", function () {
  if (checkValue == 0) {
    statusInfo.innerHTML = "Friend";
    statusInfo.style.color = "green";
    addBtn.innerHTML='Remove';
    addBtn.style.background='#dadada';
    addBtn.style.color='#111';
    checkValue = 1;
  }
  else {
    statusInfo.innerHTML = "Stranger";
    statusInfo.style.color = "red";
    addBtn.innerHTML='Add Friend';
    addBtn.style.background='#358144e0';
    addBtn.style.color='#fff';
    checkValue = 0;
  }
});

// removeBtn.addEventListener("click", function(){
//     statusInfo.innerHTML='Stranger'
//     statusInfo.style.color='red'
// })
