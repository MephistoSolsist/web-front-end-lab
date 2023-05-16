var bookList = [
    { bookName: "数据结构", price: 25, num: 6, type: 1 , id: "2021042201"},
    { bookName: "C++程序设计", price: 25, num: 6, type: 1, id: "2021042202" },
    { bookName: "C程序", price: 25, num: 6, type: 1, id: "2021042203" },
    { bookName: "网络原理", price: 25, num: 6, type: 1, id: "2021042204" },
    { bookName: "操作系统", price: 25, num: 6, type: 1, id: "2021042205" },
    { bookName: "数据库原理", price: 25, num: 6, type: 1, id: "2021042206" },
    { bookName: "WEB开发", price: 25, num: 6, type: 1, id: "2021042207" },
    { bookName: "人工智能", price: 25, num: 6, type: 1 , id: "2021042208"},
    { bookName: "战争与和平", price: 25, num: 6, type: 2 , id: "2021042209"},
    { bookName: "战争", price: 25, num: 6, type: 2, id: "2021042210" },
    { bookName: "和平", price: 25, num: 6, type: 2 , id: "2021042211"},
    { bookName: "文学", price: 25, num: 6, type: 2, id: "2021042212" },
    { bookName: "三国演义", price: 25, num: 6, type: 2, id: "2021042213" },
    { bookName: "四国演义", price: 25, num: 6, type: 2 , id: "2021042214"},
    { bookName: "五国演义", price: 25, num: 6, type: 2 , id: "2021042215"},
    { bookName: "高等数学", price: 25, num: 6, type: 3 , id: "2021042216"},
    { bookName: "微积分", price: 25, num: 6, type: 3 , id: "2021042217"},
    { bookName: "数学分析", price: 25, num: 6, type: 3 , id: "2021042218"},
    { bookName: "线性代数", price: 25, num: 6, type: 3 , id: "2021042219"},
    { bookName: "概率论", price: 25, num: 6, type: 3, id: "2021042220" },
    { bookName: "代数与几何", price: 25, num: 6, type: 3 , id: "2021042221"},
    { bookName: "毛泽东选集", price: 100, num: 6, type: 4 , id: "202104222"},
];
var pageSize = 4;
var currentPage = 1;
var currentType = 0;

var storage = window.localStorage;
if (storage.getItem("book") == null);
storage.setItem("book", JSON.stringify(bookList));

function getBookListByType(type) {
    var storage = window.localStorage;
    var books = new Array();
    var localTable = JSON.parse(storage.getItem("book"));
    if (type == 0)
        return localTable.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
        );
    for (let i = 0; i < localTable.length; i++) {
        if (localTable[i].type == type) books.push(localTable[i]);
    }
    return books.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}

function getBookById(id) {
    var storage = window.localStorage;
    var localTable = JSON.parse(storage.getItem("book"));
    for (let i = 0; i < localTable.length; i++) {
        if (localTable[i].id == id) return localTable[i];
    }
    return null;
}

function findBooksByFuzzyName(keyWord) {
    var books = [];
    var storage = window.localStorage;
    var localTable = JSON.parse(storage.getItem("book"));
    if (localTable == null) return null;
    for (let i = 0; i < localTable.length; i++) {
        if (localTable[i].bookName.indexOf(keyWord) != -1)
            books.push(localTable[i]);
    }
    return books;
}

function modifyBook(book) {
    var storage = window.localStorage;
    var localTable = JSON.parse(storage.getItem("book"));
    if (localTable == null) {
        alert("修改失败");
        return false;
    }
    for (let i = 0; i < localTable.length; i++) {
        if (localTable[i].id == book.id) {
            localTable.splice(i, 1, book);
            break;
        }
    }
    storage.setItem("book", JSON.stringify(localTable));
    return true;
}

function delBookById(id) {
    var storage = window.localStorage;
    var localTable = JSON.parse(storage.getItem("book"));
    if (localTable == null) {
        alert("删除失败");
        return false;
    }
    for (let i = 0; i < localTable.length; i++) {
        if (localTable[i].id == id) {
            localTable.splice(i, 1);
            break;
        }
    }
    storage.setItem("book", JSON.stringify(localTable));
    return true;
}

function addBook(book) {
    var storage = window.localStorage;
    var localTable = JSON.parse(storage.getItem("book"));
    if (localTable == null) {
        alert("增加失败");
        return false;
    }
    localTable.push(book); //数据尾部插入
    storage.setItem("book", JSON.stringify(localTable));
    return true;
}

function clearTableRow() {
    var table = document.getElementById("table");
    while (table.rows.length > 1) table.deleteRow(1);
}

//业务实现

function displayTableByBooks(books) {
    for (let row of books) {
        console.log(row); //测试用。
        var tr = document.createElement("tr"); //创建元素，用非DOM方法。
        tr.innerHTML = `<td>${row.bookName}</td>
    <td>${row.price}</td>
    <td>${row.num}</td>
    <td><input type=button onclick=del(this,\"${row.id}\") value=删除>
    <input type=button onclick=editUI(\"${row.id}\") value=编辑></td>`;
        document.getElementById("table").appendChild(tr); //DOM方法
    }
}

function del(obj, id) {
    if (!delBookById(id)) {
        alert("删除失败");
        return;
    }
    clearTableRow();
    displayTableByBooks(getBookListByType(currentType));
}

function editUI(id) {
    document.getElementById("editbook").style.display = "block"; //编辑框UI显示：
    var book = getBookById(id); //查询本地数据库，获书本。
    if (book == null) return; //查询失败，返回。
    //以下编辑页面数据显示
    document.getElementById("bookid").value = book.id;
    document.getElementById("bookName").value = book.bookName;
    document.getElementById("bookprice").value = book.price;
    document.getElementById("booknum").value = book.num;
    document.getElementById("booktype").value = book.type; //下拉列表框值。
}
function editbook() {
    let id = document.getElementById("bookid").value; //不能被修改
    var book = getBookById(id); //
    //var currentBookType=book.type;//没修改前书籍的type,
    //修改这本书的内容。
    book.type = document.getElementById("booktype").value;
    book.num = document.getElementById("booknum").value;
    book.price = document.getElementById("bookprice").value;
    book.bookName = document.getElementById("bookName").value;
    //修改本地数据库
    if (!modifyBook(book)) {
        alert("编辑失败");
        return;
    }
    //修改UI：根据当前type重新刷新表格
    clearTableRow();
    displayTableByBooks(getBookListByType(currentType));
    //返回
    document.getElementById("editbook").style.display = "none";
}

function addUI(){
    document.getElementById("addbook").style.display="block";
}

function add() {
    //获取新书内容
    var book = {}; //初始值
    book.id = document.getElementById("newId").value;
    if (book.id == "") {
        alert("必须有书号");
        return;
    }
    //if(书号重复，读者自己写){。。。。。}
    book.type = document.getElementById("newType").value;
    book.num = document.getElementById("newNum").value;
    book.price = document.getElementById("newPrice").value;
    book.bookName = document.getElementById("newName").value;
    //console.log(book);
    //把书籍插入到本地数据库中，代码：
    if (!addBook(book)) {
        alert("增加失败");
        return;
    }

    //主UI修改，可采用编辑的同样方法
    clearTableRow();
    displayTableByBooks(getBookListByType(book.type));
    //返回主UI
    document.getElementById("addbook").style.display = "none";
}

function returnMain() {
    document.getElementById("editbook").style.display = "none";
    document.getElementById("addbook").style.display = "none";
}

function findBook(keyWord) {
    clearTableRow();
    displayTableByBooks(findBooksByFuzzyName(keyWord));
}

window.onload = function () {
    document.getElementById("all").onclick = function () {
        clearTableRow(); //表格清空。
        currentPage = 1;
        currentType = 0; //为什么有这一行？请思考！
        displayTableByBooks(getBookListByType(0));
    };
    document.getElementById("computer").onclick = function () {
        clearTableRow();
        currentPage = 1;
        currentType = 1; //为什么有这一行？请思考！
        displayTableByBooks(getBookListByType(1));
    };
    document.getElementById("literature").onclick = function () {
        clearTableRow();
        currentPage = 1;
        currentType = 2; //为什么有这一行？请思考！
        displayTableByBooks(getBookListByType(2));
    };
    document.getElementById("math").onclick = function () {
        clearTableRow();
        currentPage = 1;
        currentType = 3; //为什么有这一行？请思考！
        displayTableByBooks(getBookListByType(3));
    };
    document.getElementById("policy").onclick = function () {
        clearTableRow();
        currentPage = 1;
        currentType = 4; //为什么有这一行？请思考！
        displayTableByBooks(getBookListByType(4));
    };
};

//分页
function next() {
    currentPage++;
    clearTableRow();
    displayTableByBooks(getBookListByType(currentType));
}
function previous() {
    if (currentPage > 1) currentPage--;
    clearTableRow();
    displayTableByBooks(getBookListByType(currentType));
}
function setPageSize() {
    try {
        pageSize = parseInt(document.getElementById("number").value);
        currentPage = 1; //从第1页开始。
        clearTableRow();
        displayTableByBooks(getBookListByType(currentType));
    } catch (e) {
        alert("error");
        return;
    }
}
function go() {
    var pagenumStr = document.getElementById("go").value;
    currentPage = parseInt(pagenumStr);
    if (currentPage < 0) currentPage = 1;
    clearTableRow();
    displayTableByBooks(getBookListByType(currentType));
}

