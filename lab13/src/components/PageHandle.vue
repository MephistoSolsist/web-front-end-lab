<template>
    <div id="page">
        <div>
            第<input id="go" type="number" v-model="page" style="width: 25px;height: 18px;" />页
            <button @click="go()">go</button>
        </div>
        <div>
            <button @click="previous()">上一页</button>
            <button @click="next()">下一页</button>
        </div>
        <div>
            每页显示<input type="number" v-model="pageSize" style="width: 25px;height: 18px;" />条记录
            <button @click="setPageSize()">设定</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PageHandle',
    data(){
        return {
            page:1,
            pageSize:3
        }
    },
    methods: {
        go() {
            this.$emit('go',this.page);
        },
        previous() {
            this.$emit('previous');
        },
        next() {
            this.$emit('next');
        },
        setPageSize() {
            this.$emit('setPageSize',this.pageSize)
        },
    }
}
</script>
<style>
#page {
    display: flex;
    justify-content: space-between;
    width: 40%;
    height: 20px;
    margin: 5px auto;
    position: relative;
}
</style>