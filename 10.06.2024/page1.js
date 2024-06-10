document.addEventListener("DOMContentLoaded", function () {

    let storedsignupData = JSON.parse(localStorage.getItem("user"));
    let loginform = document.getElementById("theLoginform");
    
    loginform.addEventListener("submit", theloginprocces);
    function theloginprocces(event){
        event.preventDefault();
        let email = document.getElementById("LoginexampleInputEmail1").value;
        let password = document.getElementById("LoginexampleInputPassword1").value;
    
        if (email === storedsignupData.email && password=== storedsignupData.Password){
            window.location.href = "orangeCongratsPage.html";
        } else{            alert("Incorrect email or password. Please try again.");
        }
    }
    
    
    });