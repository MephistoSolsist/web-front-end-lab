<template >
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
      <tr v-for="item in showBookList" v-bind:key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.user }}</td>
        <td>{{ item.date }}</td>
        <td>
          <a>删除 </a>
          <a>编辑</a>
        </td>
      </tr>
    </tbody>
  </table>
  <PageHandle @next="next" @previous="previous" @setPageSize="setPageSize" @go="go"></PageHandle>
</template>
<script>
import PageHandle from './PageHandle.vue'
export default {
  name: 'TableHandle',
  props:['list'],
  components: {
    PageHandle
  },
  data() {
    return {
      bookList:this.list,
      showBookList: [],
      editUI: false,
      editDetail: {},
      newsList: null,
      currentPage: 1,
      pageSize: 3
    }
  },
  created: function () {
    this.show()
  },
  methods: {
    show() {
      this.showBookList = this.bookList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    next() {
      this.currentPage += 1;
      this.show()
    },
    previous() {
      this.currentPage -= 1;
      this.show()
    },
    setPageSize(val) {
      this.pageSize=val
      this.show()
    },
    go(val){
      this.currentPage=val
      this.show()
    }
  }
}
</script>
<style>
table {
  width: 100%;
  font-size: 14px;
  border: 1px solid #eee
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