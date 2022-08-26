
let users=  JSON.parse(localStorage.getItem("signindata")) || {};
let signedin= JSON.parse(localStorage.getItem("signedin")) || {};

class user{
    constructor(){
        this.project= "Google-digital-garage";
        this.creator= "Sanghamitra";
    }
    validateemail(email){
        let value= email.includes('@') ? true : false;
        return value;
    }
    validatepassword(password){
        let value= password.length>=6 ? true : false;
        return value;
    }
    signin(email, password){
        if(users[email]!==undefined && users[email]===password){
            let data= {
                email,
                password,
            }
            signedin= data;
            localStorage.setItem("signedin", JSON.stringify(signedin));
            alert("Signin Successful");
            window.location.assign("./index.html");
        }
        else{
            console.log(users[email], users[email]===password);
            document.getElementById("incorrectpassword").innerText= "The email and password you entered don’t match";
            document.getElementById("incorrectpassword").style.color= "#bb1a1a";
            document.getElementById("incorrectpassword").style.fontSize= "14px";
        }
    }
    register(email, password){
        let isvalidated= false;
        isvalidated= this.validatepassword(password) && this.validateemail(email);
        if(users[email]!==undefined){
            alert("Already Registerd.")
            console.log(users);
            console.log(users);
            window.location.assign("./signin.html");
        }else{
            if(isvalidated){
                this.email= email;
                this.password= password;
    
                users[this.email]=this.password;
                localStorage.setItem("signindata", JSON.stringify(users));
                alert("Successfully Registerd.")
                window.location.assign("./signin.html");
            }else{
                alert("Please Enter Valid Email Id");
            }
        }
    }
}


function register(){
    let email= document.getElementById("registeremail").value;
    let password= document.getElementById("registerpassword").value;
    if(email!=="" && password!==""){
        let u1= new user();
        document.getElementById("registerr").disabled = false;
        document.getElementById("registerr").style.opacity = "1";
        u1.register(email, password);
    }else{
        document.getElementById("registerr").disabled = true;
        document.getElementById("registerr").style.opacity = "0.3";
    }
}
function signin(){
    let email= document.getElementById("signinemail").value;
    let password= document.getElementById("signinpassword").value;
    if(email!=="" && password!==""){
        document.getElementById("signinn").disabled = false;
        document.getElementById("signinn").style.opacity = "1";
        let u1= new user();
        u1.signin(email, password);
        console.log(users);
    }else{
        document.getElementById("signinn").disabled = true;
        document.getElementById("signinn").style.opacity = "0.3";
    }
}


function enterregister(){
    let email= document.getElementById("registeremail").value;
    let password= document.getElementById("registerpassword").value;
    if(email!=="" && password.length>=6){
        document.getElementById("registerr").disabled = false;
        document.getElementById("registerr").style.cursor= "pointer";
        document.getElementById("registerr").style.opacity = "1";
        document.getElementById("label").style.color= "#757575";
    }else{
        document.getElementById("registerr").disabled = true;
        document.getElementById("registerr").style.opacity = "0.3";
        document.getElementById("label").style.color= "#bb1a1a";
    }
}

function entersignin(){
    let email= document.getElementById("signinemail").value;
    let password= document.getElementById("signinpassword").value;
    if(email!=="" && password!==""){
        document.getElementById("signinn").disabled = false;
        document.getElementById("signinn").style.cursor= "pointer";
        document.getElementById("signinn").style.opacity = "1";
    }else{
        document.getElementById("signinn").disabled = true;
        document.getElementById("signinn").style.opacity = "0.3";
    }
}


function showpasswordreg(event) {
    event.preventDefault();
    let showpasswordreg= document.getElementById("showpasswordreg");
    let x = document.getElementById("registerpassword");
    if (x.type === "password" && x.value!=="") {
      x.type = "text";
      showpasswordreg.src= "https://static.thenounproject.com/png/173601-200.png";
    } else if (x.type === "text" && x.value!==""){
      x.type = "password";
      showpasswordreg.src= "https://www.pngkey.com/png/full/155-1554223_png-file-svg-crossed-eye-icon-png.png";
    }
  }



function showpassword(event) {
    event.preventDefault();
    let showpassword= document.getElementById("showpassword");
    let x = document.getElementById("signinpassword");
    if (x.type === "password" && x.value!=="") {
      x.type = "text";
      showpassword.src= "https://static.thenounproject.com/png/173601-200.png";
    } else if (x.type === "text" && x.value!==""){
      x.type = "password";
      showpassword.src= "https://www.pngkey.com/png/full/155-1554223_png-file-svg-crossed-eye-icon-png.png";
    }
  }