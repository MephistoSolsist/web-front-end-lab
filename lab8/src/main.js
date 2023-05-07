var bookList = [
    { bookName: "数据结构", price: 25, num: 6, type: 1 },
    { bookName: "C++程序设计", price: 25, num: 6, type: 1 },
    { bookName: "C程序", price: 25, num: 6, type: 1 },
    { bookName: "网络原理", price: 25, num: 6, type: 1 },
    { bookName: "操作系统", price: 25, num: 6, type: 1 },
    { bookName: "数据库原理", price: 25, num: 6, type: 1 },
    { bookName: "WEB开发", price: 25, num: 6, type: 1 },
    { bookName: "人工智能", price: 25, num: 6, type: 1 },
    { bookName: "战争与和平", price: 25, num: 6, type: 2 },
    { bookName: "战争", price: 25, num: 6, type: 2 },
    { bookName: "和平", price: 25, num: 6, type: 2 },
    { bookName: "文学", price: 25, num: 6, type: 2 },
    { bookName: "三国演义", price: 25, num: 6, type: 2 },
    { bookName: "四国演义", price: 25, num: 6, type: 2 },
    { bookName: "五国演义", price: 25, num: 6, type: 2 },
    { bookName: "高等数学", price: 25, num: 6, type: 3 },
    { bookName: "微积分", price: 25, num: 6, type: 3 },
    { bookName: "数学分析", price: 25, num: 6, type: 3 },
    { bookName: "线性代数", price: 25, num: 6, type: 3 },
    { bookName: "概率论", price: 25, num: 6, type: 3 },
    { bookName: "代数与几何", price: 25, num: 6, type: 3 },
    { bookName: "毛泽东选集", price: 100, num: 6, type: 4 },
];
function getBookListByType(type) {
    if (type == 0) return bookList;
    else {
        let tmpList = [];
        for (book of bookList) {
            if (book.type == type) {
                tmpList.push(book);
            }
        }
        return tmpList;
    }
}

function clearTableRow() {
    var table = document.getElementById("table");
    var len = table.rows.length;
    for (var i = 1; i < len; i++) {
        table.deleteRow(1);
    }
}

let displayTableByBooks = (books) => {
    for (let i = 0; i < books.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML =
            "<td>" +
            "<input name='deletion' type='checkbox'/>" +
            "</td>" +
            "<td>" +
            books[i].bookName +
            "</td>" +
            "<td>" +
            books[i].price +
            "</td>" +
            "<td>" +
            books[i].num +
            "</td>" +
            "<td><input type=button onclick='del(this);' value=删除>" +
            "<input type=button onclick='edit();' value=编辑></td>";
        document.getElementById("table").appendChild(row);
    }
};

let del = (node) => {
    var tr = node.parentNode.parentNode;
    tr.remove();
};

let delChecked = () => {
    var box = document.getElementsByName("deletion");
    var n = box.length;
    for (var i = 0; i < n; i++) {
        if (box[i].checked) {
            box[i].parentNode.parentNode.remove();
            i--, n--
        }
    }
};

window.onload = function () {
    document.getElementById("search").onclick = () => {
        clearTableRow();
        var flag = false
        var name = document.getElementById("search-input").value
        bookList.forEach((book)=>{
            if(book.bookName.indexOf(name)!=-1){
                flag=true
                var row = document.createElement("tr");
                row.innerHTML =
                    "<td>" +
                    "<input name='deletion' type='checkbox'/>" +
                    "</td>" +
                    "<td>" +
                    book.bookName +
                    "</td>" +
                    "<td>" +
                    book.price +
                    "</td>" +
                    "<td>" +
                    book.num +
                    "</td>" +
                    "<td><input type=button onclick='del(this);' value=删除>" +
                    "<input type=button onclick='edit();' value=编辑></td>";
                document.getElementById("table").appendChild(row);
            }
        })
        if(!flag){
            alert("暂无书目")
        }
    }
    document.getElementById("all").onclick = () => {
        clearTableRow();
        displayTableByBooks(getBookListByType(0));
    }
    document.getElementById("computer").onclick = () => {
        clearTableRow();
        displayTableByBooks(getBookListByType(1));
    }
    document.getElementById("literature").onclick = () => {
        clearTableRow();
        displayTableByBooks(getBookListByType(2));
    }
    document.getElementById("math").onclick = () => {
        clearTableRow();
        displayTableByBooks(getBookListByType(3));
    }
    document.getElementById("policy").onclick = () => {
        clearTableRow();
        displayTableByBooks(getBookListByType(4));
    }
};
