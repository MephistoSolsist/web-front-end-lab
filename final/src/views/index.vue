<template>
    <el-affix>
        <MenuBar></MenuBar>
    </el-affix>
    <router-view></router-view>
</template>
<script setup>
import MenuBar from '@/components/MenuBar.vue';
</script>
<style>
</style>