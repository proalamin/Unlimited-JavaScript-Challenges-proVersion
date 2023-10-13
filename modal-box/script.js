console.log('js connected')

let popup = document.getElementById("popup");

function submitBtn(){
    popup.classList.add('open-popup')
}

function closeBtn(){
    popup.classList.remove('open-popup')
}