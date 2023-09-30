const SignIn = document.getElementById("SIGNIN");
const Register = document.getElementById("REGISTER");

function register() {
    SignIn.style.left = "-300px";
    Register.style.left = "-225px";
    const active = document.getElementsByClassName("btn");
    for (let i = 0; i < active.length; i++) {
        active[1].classList.add("active");
        active[0].classList.remove("active");
    }
    Register.reset();
}

function signin() {
    SignIn.style.left = "205px";
    Register.style.left = "325px";
    const active = document.getElementsByClassName("btn");
    for (let i = 0; i < active.length; i++) {
        active[0].classList.add("active");
        active[1].classList.remove("active");
    }
    SignIn.reset();
}

const loader = document.getElementById('preloader');
window.addEventListener('load',()=>{
    loader.style.display = 'none';
})