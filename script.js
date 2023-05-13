let signupBtn= document.getElementById("signupBtn");
let signinBtn= document.getElementById("signinBtn");
let namefield= document.getElementById("namefield");
let title= document.getElementById("title");

signinBtn.onclick=function(){
    namefield.style.maxHeight= "0";
    title.innerHTML= "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick=function(){
    namefield.style.maxHeight= "60px";
    title.innerHTML= "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}