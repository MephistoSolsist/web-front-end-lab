<script setup>
import ArticleInfo from '@/components/ArticleInfo.vue';
const articles = [
    { title: "a1", text: "this is passage 1" },
    { title: "a2", text: "this is passage 2" },
    { title: "a3", text: "this is passage 3" },
]
</script>
<template>
    <div id="container">
        <div id="intro">
            <el-image :src="require('@/assets/images/hayasakaCover.png')" fit="fill" />
            <div>NBTCA</div>
            <div id="fullName" style="font-size: 21px;">浙大宁波理工学院计算机协会</div>
        </div>
        <div id="main">
            <el-container>
                <el-container>
                    <el-main>
                        <div id="articles">
                            <ArticleInfo v-for="article in articles" :key="article" :article="article"></ArticleInfo>
                        </div>
                    </el-main>
                    <el-aside width="250px">
                    </el-aside>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<style>
#intro {
    width: 100%;
    color: #134991;
    font-size: 41px;
}

#intro .el-image {
    height: 400px;
    width: 500px;
}

#articles {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#main {
    margin: 100px auto;
    width:calc(100% - 100px);
}

#help {
    margin: 4px auto;
    border: solid;
    width: 240px;
    height: 300px;
}
</style>
