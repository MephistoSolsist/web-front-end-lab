class Book{
    constructor(name,price){
        this.name=name
        this.price=price
    }
}
var books=[
    new Book("c++",20),
    new Book("go",20),
    new Book("java",30),
    new Book("html",40),
    new Book("vue",20)
]
var i=0;
let add = () => {
    if(i<books.length){
        var table = document.getElementById('book')
        var tr =document.createElement('tr')
        table.appendChild(tr)
        var name = document.createElement('td')
        var price = document.createElement('td')
        name.innerText=books[i].name;
        price.innerText=books[i].price;
        tr.appendChild(name)
        tr.appendChild(price)
        i++
    }else{
        alert("到头了")
    }
};
let del = () => {
    if(i>0){
        var table=document.getElementsByTagName("tr")[i]
        table.remove()
        i--
    }else{
        alert("没有了")
    }
};
