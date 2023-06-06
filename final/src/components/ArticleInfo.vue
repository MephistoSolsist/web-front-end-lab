<script setup>
const props = defineProps(
    { article: Object }
)
console.log(props)
</script>
<template>
    <div id="main">
        <h1>{{ article.title }}</h1>
        {{ article.text }}
    </div>
</template>
<style>
#main {
    height: 300px;
    width: 80%;
    color: black;
}
</style>