<template>
    <div id="table">
        <div class="add">
            <input type="text" v-model="addDetail.title" name="title" placeholder="标题" />
            <input type="text" v-model="addDetail.user" name="user" placeholder="发布人" />
            <input type="date" v-model="addDetail.date" name="date" placeholder="发布时间" />
            <button @click="addBook">新增</button>
        </div>
        <table cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>标题</th>
                    <th>发布人</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in bookList" v-bind:key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.user }}</td>
                    <td>{{ item.date }}</td>
                    <td>
                        <a v-on:click="deleteBook(index)">删除 </a>
                        <a v-on:click="editBook(item)">编辑</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="mask" v-show="editUI">
            <div class="mask ">
                <div class="title">
                    编辑
                    <span @click="cancel">x</span>
                </div>
                <div class="content">
                    <input type="text" v-model="editDetail.title" name="title" placeholder="标题" />
                    <input type="text" v-model="editDetail.user" name="user" placeholder="发布人" />
                    <input type="date" v-model="editDetail.date" name="date" placeholder="发布时间" />
                    <button @click="edit">更新</button>
                    <button @click="cancel">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
function Book(id, user, title, date) {
    this.id = id
    this.user = user
    this.title = title
    this.date = date
}
var bookList = []
bookList.push(new Book(1, "John", "python程序设计", "2020-10-20"))
bookList.push(new Book(2, "Zhu", "c语言程序设计", "2020-10-20"))

export default {
    name: 'TableUI',
    data() {
        return {
            bookList: [],
            editUI: false,
            addDetail: {},
            editDetail: { },
            newsList: null,
            idNow: 3
        }
    },
    created: function () {
        this.bookList = bookList
    },
    methods: {
        deleteBook(index) {
            this.bookList.splice(index, 1)
        },
        addBook() {
            this.bookList.push(new Book(this.idNow++, this.addDetail.user, this.addDetail.title, this.addDetail.date))
        },
        editBook(item) {
            this.editUI = true
            this.editDetail.title = item.title
            this.editDetail.date = item.date
            this.editDetail.user = item.user
            this.editDetail.id = item.id
        },
        edit() {
            for (var book of this.bookList) {
                if (book.id == this.editDetail.id) {
                    book.title = this.editDetail.title
                    book.user = this.editDetail.user
                    book.date = this.editDetail.date
                    break
                }
            }
            this.editUI=false
        },
        cancel() {
            this.editUI = false
        }
    }
}


</script>

<style>
#table table {
    width: 100%;
    font-size: 14px;
    border: 1px solid #eee
}

#table {
    padding: 0 10px;
}

table thead th {
    background: #f5f5f5;
    padding: 10px;
    text-align: left;
}

table tbody td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
}

table tbody td span {
    margin: 0 10px;
    cursor: pointer;
}

.delete {
    color: red;
}

.edit {
    color: #008cd5;
}

.add {
    border: 1px solid #eee;
    margin: 10px 0;
    padding: 15px;
}

input {
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 3px;
    margin-right: 15px;
}

button {
    background: #008cd5;
    border: 0;
    padding: 4px 15px;
    border-radius: 3px;
    color: #fff;
}

#mask {
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
}

.mask {
    width: 300px;
    height: 250px;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 47;
    border-radius: 5px;
}

.title {
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.title span {
    float: right;
    cursor: pointer;
}

.content {
    padding: 10px;
}

.content input {
    width: 270px;
    margin-bottom: 15px;
}
</style>