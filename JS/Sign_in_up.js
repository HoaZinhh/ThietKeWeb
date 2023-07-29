function signup(e){
    event.preventDefault();
    var username = document.getElementById(elemmentId = "username").value;
    var email = document.getElementById(elemmentId = "email").value;
    var password = document.getElementById(elemmentId =  "password").value;
    var user ={
        username:username,
        email:email,
        password,
    }
    var json = JSON.stringify(value = user);
    localStorage.setItem(key = username,value = json);
    alert(message = "Đăng kí thành công !!!")
}

function login(e){
    event.preventDefault();
    var username = document.getElementById(elemmentId = "username").value;
    var email = document.getElementById(elemmentId = "email").value;
    var password = document.getElementById(elemmentId =  "password").value;
    var user = localStorage.getItem(key = username);
    var data = JSON.parse(text = user);
    
    if(user == null){
        alert(message="Vui lòng nhập Username & Password")
    }
    else if(username = data.username && email == data.email && password == data.password){
        alert(message = "Đăng nhập thành công")
        window.location.href = "LandingPage.html"
    } 
    else{
        alert(message = "Đăng nhập thất bại")
    }
}
