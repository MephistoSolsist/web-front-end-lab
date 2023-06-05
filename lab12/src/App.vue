<template>
  <div id="table">
    <div class="add">
      <input type="text" v-model="addDetail.title" name="title" placeholder="标题" />
      <input type="text" v-model="addDetail.user" name="user" placeholder="发布人" />
      <input type="date" v-model="addDetail.date" name="date" placeholder="发布时间" />
      <button @click="addBook">新增</button>
    </div>
    <TableUI></TableUI>
  </div>
</template>

<script>
import TableUI from './components/TableUI.vue';
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    TableUI
  }
}
</script>