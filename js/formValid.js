function formValidation() {
    var email = document.getElementById("email");
    var em = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (!email.value.match(em)) {
        alert("Email not valid");
    }

    var firstname = document.getElementById("firstname");
    var fname = /^[a-zA-Z]+$/;
    if (!firstname.value.match(fname)) {
        alert("First name is not valid");
    }

    var lastname = document.getElementById("lastname");
    var lname = /^[a-zA-Z]+$/;
    if (!lastname.value.match(lname)) {
        alert("Last name is not valid");
    }

    /* var name1 = document.getElementById("name1");
    var cname = /^[a-zA-Z]+$/;
    if(!name1.value.match(cname)){
        alert("Please use only letters for name");
    }

    /* var password = document.getElementById("password")
     var conpassword = document.getElementById("conpassword")
     var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
    if(!password.value.match(pass)){
        alert("Please include at least 1 uppercase character, 1 lowercase character, and 1 number.");

        if(password.value != conpassword.value){
            alert("Please enter the correct password");
        }*/

    var address1 = document.getElementById("address1");
    var add1 = "";
    if (!address1.value.match(add1)) {
        alert("Address1 must not be empty");
    }

    var address2 = document.getElementById("address2");
    var add2 = "";
    if (!address1.value.match(add1)) {
        alert("Address2 must not be empty");
    }

    var city = document.getElementById("city");
    var cit = /^[a-zA-Z]+$/;
    if (!city.value.match(cit)) {
        alert("City is not valid");
    }

    var code = document.getElementById("code");
    var pcode = /^[0-9]+$/;
    if (!code.value.match(pcode)) {
        alert("Please use only numbers");
    }
}


function passwordValid() {
    var password = document.getElementById("password").value;
    var conpassword = document.getElementById("conpassword").value;
    if (password != conpassword) {
        alert("Passwords do not match.");
    }
}

function MyValidation() {
    formValidation();
    passwordValid();
}


