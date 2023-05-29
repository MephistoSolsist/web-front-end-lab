<template>
  <table>
    <tr>
      <th>序号</th>
      <th>标题</th>
      <th>发布人</th>
      <th>发布时间</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in list" v-bind:key="item">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.people}}</td>
        <td>{{item.time}}</td>
        <td>
            <a>删除</a>
            <a>编辑</a>
        </td>
    </tr>
  </table>
  </template>
<script>
class Item{
  constructor(id,title,people,time){
    this.id=id
    this.title=title
    this.people=people
    this.time=time
  }
}
var list = [] 
list.push(new Item(1,"Linux系统运维","林冲","2018-02-19"))
list.push(new Item(2,"python全栈开发","宋江","2018-02-19"))
export default {
  name: 'EventList',
  props: {
  },
  data(){
    return {
        list:list
    }
  }
}
</script>
