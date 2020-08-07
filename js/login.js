// Login Form
var signUpBtn = document.getElementById("sign-up");
signUpBtn.addEventListener("click", function(){
    var signUpForm = document.getElementById("signUp-form");
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "none"
    signUpForm.style.display = "block"
})
var logIn = document.getElementById("login");
logIn.addEventListener("click", function(){
    var signUpForm = document.getElementById("signUp-form");
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "block"
    signUpForm.style.display = "none"
})


var loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(){
    logInBtnFunction("login-phonenumber", "login-password")
})
function logInBtnFunction(number, password){
    var loginNumber = document.getElementById(number).value;
    var loginPassword = document.getElementById(password).value;
    var num = "01830134593";
    var pass = "arif"
    if(loginNumber == "01830134593" && loginPassword == "arif"){
        location.replace("ecomerceOne.html");
    }else{
        alert("Please Empty Box fill correctly");
        document.getElementById(number).value = ""
        loginPassword = document.getElementById(password).value = ""
        return false;
    }
   
}

var signupNextBtn = document.getElementById("signUp-nextBtn");
signupNextBtn.addEventListener("click", function(){
    signUpItem("phone-number","first-name","last-name","set-password")    
})


function signUpItem(number, fName, lName, sPassword){
    var phoneNUmber = document.getElementById(number).value;
    var firstName = document.getElementById(fName).value;
    var lastName = document.getElementById(lName).value;
    var password = document.getElementById(sPassword).value;
    if(phoneNUmber == "" || firstName == "" || lastName == "")
    {
        alert("Please Empty Box fill first");
        return false;
    }
    location.replace("ecomerceOne.html");
}