<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const uploadFile = () => {
    const fileInput = proxy.$refs.fileInput
    const file = fileInput.files[0]
    console.log(file)
}</script>
<template>
    <div id="main">
        <table>
            <tr>
                <td width="100px">歌曲标题</td>
                <td width="100px"><input type="text"></td>
            </tr>
            <tr>
                <td>歌手</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>歌曲文件</td>
                <td><input type="file" ref="fileInput" @change="uploadFile" /></td>
            </tr>
        </table>
        <button id="submit">提交</button>
    </div>
</template>
<style scoped>
#main {
    width: 600px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 18;
    border-radius: 50px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
}

tr {
    height: 70px;
}

table {
    position: relative;
    margin: 70px 40px;
    font-size: 21px;
}

#submit {
    width: 200px;
    height: 40px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 100px);
    border-radius: 30px;
    background-color: white;
    border: none;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
}

#submit:hover {
    cursor: pointer;
}
</style>