console.log('ok');

var statusInfo= document.getElementById('statusInfo');
var addBtn=document.getElementById('addBtn');
var removeBtn=document.getElementById('removeBtn');

addBtn.addEventListener("click", function(){
    statusInfo.innerHTML='Friend'
    statusInfo.style.color='green'
})

removeBtn.addEventListener("click", function(){
    statusInfo.innerHTML='Stranger'
    statusInfo.style.color='red'
})
