const email = document.getElementById('exampleFormControlInput1');
const email_error = document.getElementById('email_error');
const password = document.getElementById('inputPassword5');
const password_error= document.getElementById('password_error');
const phonenum = document.getElementById('phonenum')
const phonenum_error = document.getElementById('phonenum_error');
const form = document.getElementById('form');


form.addEventListener ("input", function(event){
    event.preventDefault;
    
    let emailinput = email.value;
    let validate = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let validateresult=validate.test(emailinput);
    if (validateresult){
        email_error.innerHTML="valid";
    }
    else{
        email_error.innerHTML= "not valid";
    }
    let phonenuminput= phonenum.value;
    let validate1= /^077\d{7}$/;
    let valitateresult1 = validate1.test(phonenuminput)
    if (valitateresult1){
        phonenum_error.innerHTML="valid";
    }
    else{
        phonenum_error.innerHTML= "not valid";
    }
    let passwordinput = password.value;
    let validate2 = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
    let validateresult2=validate2.test(passwordinput);
    if (validateresult2){
        password_error.innerHTML="valid";
    }
    else{
        password_error.innerHTML= "not valid";
    }
   
   

}



);
    

