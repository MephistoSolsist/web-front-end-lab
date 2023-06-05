<template>
  <div id="table">
    <div class="add">
      <input type="text" v-model="addDetail.title" name="title" placeholder="标题" />
      <input type="text" v-model="addDetail.user" name="user" placeholder="发布人" />
      <input type="date" v-model="addDetail.date" name="date" placeholder="发布时间" />
      <button @click="add">新增</button>
    </div>
    <table-handle :list="bookList"></table-handle>
  </div>
</template>

<script>
var bookList = [
  { id: 1, user: "A", title: "python程序设计", date: "2020-10-20" },
  { id: 2, user: "B", title: "go程序设计", date: "2020-10-21" },
  { id: 3, user: "C", title: "c程序设计", date: "2020-10-22" },
  { id: 4, user: "D", title: "c++程序设计", date: "2020-10-23" },
  { id: 5, user: "E", title: "rust程序设计", date: "2020-10-20" },
  { id: 6, user: "F", title: "java程序设计", date: "2020-10-20" },
  { id: 7, user: "G", title: "basic程序设计", date: "2020-10-20" },
  { id: 8, user: "H", title: "汇编程序设计", date: "2020-10-20" },
  { id: 9, user: "I", title: "Pascal程序设计", date: "2020-10-20" },
  { id: 10, user: "J", title: "分布式系统设计", date: "2020-10-20" },
  { id: 11, user: "K", title: "tcp", date: "2020-10-20" },
]
import TableHandle from './components/TableHandle.vue'
export default {
  name: 'App',
  data() {
    return {
      bookList: bookList,
      idNow: 12,
      addDetail: {}
    }
  },
  methods: {
    add() {
      this.bookList.push({id:this.idNow++,user:this.addDetail.user,title:this.addDetail.title,date:this.addDetail.date})
    }
  },
  components: {
    'table-handle': TableHandle
  }

}


</script>
<style>
#table {
  padding: 0 10px;
}
</style>