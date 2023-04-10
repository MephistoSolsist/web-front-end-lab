class Uqe{
    constructor(a,b,c){
        if((b*b-4*a*c)<0){ this.res1=this.res2="虚根" }
        else {
            var delta = Math.sqrt(b*b-4*a*c)
            this.res1 = (-b+delta)/(-2*a)
            this.res2 = (-b-delta)/(-2*a)
        }
    }
    getResult = () => [this.res1,this.res2]
}

let main = () =>{
    var s = ['a','b','c']
    for(e in s){ s[e] = document.getElementById(s[e]).value }
    let res = new Uqe(s[0],s[1],s[2]).getResult()
    document.getElementById('res').innerHTML="<p>值</p><p>x1:"+res[0]+"</p><p>x2:"+res[1]+"</p>"
}

