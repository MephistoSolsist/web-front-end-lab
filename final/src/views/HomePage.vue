<script setup>
</script>
<template>
    <div id="container">
        <div id="intro">
            <img src="../assets/images/hayasakaCover.png" alt="">
            <div>NBTCA</div>
            <div id="fullName" style="font-size: 21px;">浙大宁波理工学院计算机协会</div>
            <div id="fullName" style="font-size: 21px;">Computer Association of NBT</div>
        </div>
        <div id="getRepair">
            <div id="title">
                获取维修
            </div>
        </div>
        <div id="main">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>

<style>
#intro {
    color: #134991;
    font-size: 41px;
    height: calc(100vh - 48px);
}

#intro img {
    margin-top: 100px;
    height: 400px;
    width: 500px;
}

#main {
    column-count: 4;
    /* 列数 */
    column-gap: 20px;
    /* 列间距 */
    column-width: 200px;
    /* 列宽 */
}

.item {
    display: inline-block;
    /* 内联块元素 */
    width: 100%;
    /* 宽度 100% */
    margin-bottom: 20px;
    /* 底部间距 */
    background-color: beige;

}</style>
