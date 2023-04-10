class Uqe{
    constructor(){
        let a=document.getElementById('a').value;
        let b=document.getElementById('b').value;
        let c=document.getElementById('c').value;
        this.a,this.b,this.c=a,b,c
        if(isNaN(a)||isNaN(b)||isNaN(c)){
            alert("请全部输入数字")
        }
        else if((b*b-4*a*c)<0){
            this.res1="虚根"
            this.res2="虚根"
        }else{
            var delta = Math.sqrt(b*b-4*a*c)
            this.res1 = (-b+delta)/(-2*a)
            this.res2 = (-b-delta)/(-2*a)
        }
        var res=document.createElement("p")
        var t = document.createTextNode(`x1:${this.res1} x2:${this.res2}`)
        res.appendChild(t)
        document.body.appendChild(res)
    }
}

let main = () =>{
    let u = new Uqe();
    // document.getElementById('res').innerHTML="<p>值</p><p>x1:"+u.res1+"</p><p>x2:"+u.res2+"</p>"
}