function validateDetails()
{
     firstname = document.getElementById("firstname");
    firstname1 = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname");
    uname = document.getElementById("username");
    pwd = document.getElementById("password");
    phone = document.getElementById("phone");
    email = document.getElementById("email");
    address = document.getElementById("address");
    city = document.getElementById("city");
    state = document.getElementById("state");
    postelcode = document.getElementById("postelcode");
    if(firstname1.length<4)
    {
        if(firstname.value=="")
        {
            alert("Please Fill first Name");
            firstname.focus();
            return false;
        }
        alert("Name should not be less than 4 character");
        firstname.focus();
        return false;

    }

    else if(lastname.value =="")
    {
        alert("Please Fill lastname");
        lastname.focus();
        return false;
    }
    else if(uname.value =="")
    {
        alert("Please Fill username");
        uname.focus();
        return false;
    }
    else if(pwd.value =="")
    {
        alert("Please Fill password");
        pwd.focus();
        return false;
    }

    else if(phone.value =="")
    {
        alert("Please Fill phone");
        phone.focus();
        return false;
    }

    else if(email.value =="")
    {
        alert("Please Fill email");
        email2.focus();
        return false;
    }

    else if(address.value =="")
    {
        alert("Please Fill address");
        address.focus();
        return false;
    }

    else if(city.value =="")
    {
        alert("Please Fill city");
        city.focus();
        return false;
    }


    else if(state.value =="")
    {
        alert("Please Fill state");
        state.focus();
        return false;
    }


    else if(postelcode.value =="")
    {
        alert("Please Fill postelcode");
        postelcode.focus();
        return false;
    }
    else
    {
        var user=document.frmlogin.username.value;
        var invalid=/\W/; //Alphanumeric characters and Underscore permitted
        if(invalid.test(user)){
            alert("Username contain Invalid characters!");
            return false;
        }
        if(user.length<6 || user.length>15){ //username must be 6 - 15 letters length
            alert("Username must be 6 - 15 characters length!");
            return false;
        }




        var pass=document.frmlogin.password.value;
        invalid=/[\W_]/; //Alphabets and digits only allowed

        if(pass.length<6){
            alert("Password must contain atleast 6 letters!");
            return false;
        }
        if(invalid.test(pass)){
            alert("Password contain Invalid characters!");
            return false;
        }

        else
        {
            alert("Thankyou For Registering.Now you can login with the username  and password created above");
            localStorage.setItem("fname",firstname.value);
            localStorage.setItem("lname",lastname.value);
            localStorage.setItem("username",uname.value);
            localStorage.setItem("password",pwd.value);
            localStorage.setItem("pn",phone.value);
            localStorage.setItem("eml",email.value);
            localStorage.setItem("cty",city.value);
            localStorage.setItem("ads",address.value);
            localStorage.setItem("pcode",postelcode.value);
            localStorage.setItem("ste",state.value);

        }


    }
}



function numcheck()
{
    if(((event.keyCode<48)||(event.keyCode>57)) && (event.keyCode!=8))
    {
        event.returnValue=false;
        alert("Only enter Number");
    }

}

function textcheck()
{
    if(((event.keyCode<65)||(event.keyCode>90))&& ((event.keyCode<97) || (event.keyCode>122))  || (event.keyCode==32))
    {
        event.returnValue=false;
        alert("Only enter Text");
    }

}


