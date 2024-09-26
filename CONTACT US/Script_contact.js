// HAMBURGER MENU START //

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}  

// HAMBURGER MENU ENDS //

function emailVal(emailsuspect){
    var atSym = emailsuspect.indexOf("@"); 
    var dotSym = emailsuspect.indexOf(".");
    var spaceSym = emailsuspect.indexOf(" ");

    if((atSym != -1) && (atSym != 0) && (dotSym != -1) && (atSym != 0)
        && (dotSym > atSym +1) && (emailsuspect.length > dotSym + 1) && (spaceSym == -1)){
            return true;
        }
    else{
        return false;
    }

}

function validation(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let checkboxPref = document.getElementById("checkbox-pref");
    let checkboxNews = document.getElementById("checkbox-news");

    if(name.value.length == 0){
        alert("Name has to be filled.");
    }
    else if(email.value.length == 0){
        alert("Email has to be filled.")
    }
    else if(!emailVal(email.value)){
        alert("Please input valid email address.")
    }
    else if(isNaN(number.value)){
        alert("Phone number has to be numbers.")
    }
    else if(number.value.length != 11 && number.value.length != 12 &&number.value.length != 11){
        alert("Phone number has to be between 11-13 digits.")
    }
    else if(checkboxNews.checked == false){
        alert("Please agree to receive our newsletter.")
    }
    else if(checkboxPref.checked == false){
        alert("Please choose at least one ramen preference.")
    }
}

