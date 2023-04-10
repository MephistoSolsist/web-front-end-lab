var main=()=>{
    let a = parseInt(prompt('请输入第一个参数a'))
    let b = parseInt(prompt('请输入第二个参数b'))
    let c = parseInt(prompt('请输入第三个参数c'))
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        alert("请全部输入数字")
    }
    else if((b*b-4*a*c)<0){
        alert("此方程无解")
    }else{
        var res1 = (-b+Math.sqrt(b*b-4*a*c))/(-2*a)
        var res2 = (-b-Math.sqrt(b*b-4*a*c))/(-2*a)
        document.write("<p>a:"+a+"</p><p>b:"+b+"</p><p>c:"+c+"</p><p>x1:"+res1+"</p><p>x2:"+res2+"</p>");
    }
}