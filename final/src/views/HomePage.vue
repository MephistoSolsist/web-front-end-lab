<script setup>
import InfoCard from '@/components/InfoCard.vue';
</script>
<template>
    <div id="container">
        <div id="intro">
            <img src="../assets/images/hayasakaCover.png" alt="">
            <!-- <el-image :src="require('@/assets/images/hayasakaCover.png')" fit="fill" /> -->
            <div>NBTCA</div>
            <div id="fullName" style="font-size: 21px;">浙大宁波理工学院计算机协会</div>
            <div id="fullName" style="font-size: 21px;">Computer Association of NBT</div>
        </div>
        <div id="main">
            <el-container>
                <el-container>
                    <el-main>
                        <div id="articles">
                            <InfoCard></InfoCard>
                            <InfoCard></InfoCard>
                        </div>
                    </el-main>
                    <el-aside width="250px">
                    </el-aside>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<style scoped>
#intro {
    position: fixed;
    top:50px;
    width: 100%;
    margin-bottom: 100px;
    color: #134991;
    font-size: 41px;
    z-index: 0;
}

#intro .el-image {
    height: 400px;
    width: 500px;
}

#intro img{
    height: 400px;
    width: 500px;
}

#articles {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#main {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
    background-color: #134991;
    box-shadow: -2px 0 8px 10px rgba(0, 0, 0, 0.2);
    height: 2000px;
    margin-top: 600px;
}

#help {
    margin: 4px auto;
    border: solid;
    width: 240px;
    height: 300px;
}
</style>
