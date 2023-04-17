var login = () =>{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username!="000000"||password!="111111"){
        alert("用户名或密码错误")
    }else{
        window.location.replace("main.html")
    }
}
