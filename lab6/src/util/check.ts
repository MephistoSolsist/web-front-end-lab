function check_username(username:string){
    if(username.length==0){
      alert("用户名不能为空")
      return false
    }
  return true
}

function check_id(id:string){
    const id_rag=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/
    if(!id.match(id_rag)){
      alert("身份证格式错误")
      return false
    }
  return true
}
  
function check_phone(phone:string){
    if(!phone.match(/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/)){
      alert("手机号输入错误")
      return false
    }
  return true
}

function check_password(password:string){
    if(password.length==0){
      alert("密码不能为空")
      return false
    }
  return true
}
function check_password2(password:string,password2:string){
    if(password!=password2){
      alert("两次密码输入不一致")
      return false
    }
  return true
}


export{check_username,check_id,check_password,check_password2,check_phone}