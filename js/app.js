function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="admin123"){
window.location="dashboard.html";
return false;
}

document.getElementById("msg").innerHTML="Invalid Username or Password";
document.getElementById("msg").style.color="red";

return false;

}
