<script setup>
const props = defineProps({
    cardStyle: {
        type: String,
        default: "main"
    },
    title:{
        type:String,
        default: "欢迎来到 Arch Linux 中文社区"
    }
})
console.log(props)
</script>
<template>
    <div v-if="cardStyle == 'main'" id="card-main">
        <div id="title">{{ title }}</div>
    </div>
    <div v-if="cardStyle == 'aside'" id="card-aside">

    </div>
</template>
<style>
#card-main {
    width: 80%;
    height: 300px;
    border-radius: 50px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #134991;
}

#title{
    font-size: 23px;
    position: relative;
    top: 10px;
    
}

#card-aside {
    width: 100%;
    height: 200px;
    border-radius: 50px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
}
</style>