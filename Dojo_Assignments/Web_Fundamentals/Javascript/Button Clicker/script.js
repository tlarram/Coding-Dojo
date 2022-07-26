function login(element) {
    console.log(element);

if (element.innerText == "Login") {
    element.innerText= "Logout"
} else {
    element.innerText= "Login"
}
}

function hide(element) {
    element.remove();
    console.log(hide)
}

onclick="alert('Ninja was liked')"

var x = document.getElementById("Myvideo"); 

document.getElementById("Myvideo").addEventListener("mouseover", function() {
    x.play();
});

document.getElementById("Myvideo").addEventListener("mouseleave", function() {
    x.pause();
});