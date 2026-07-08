function login() {

const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;

if(user === "admin" && pass === "admin123"){
    window.location = "dashboard.html";
}else{
    document.getElementById("msg").innerHTML = "Invalid Username or Password";
}

return false;

}
