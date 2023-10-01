const popup = document.getElementById("popup");
function onpopup() {
    popup.classList.add("pop-up");
    const FormSubmit = document.getElementById("myForm").reset();
}
function offpopup() {
    popup.classList.remove("pop-up");
}
const toggleButton = document.getElementById('burger');
const navLinks = document.getElementById('nav-list');
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('right-to-left');
})

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times');
}

window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++){
        const windowheheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealtop < windowheheight - revealPoint){
            reveals[i].classList.add("acti");
        } else{
            reveals[i].classList.remove("acti");
        }
    }
}

