<template>
  <div class="pt-20 flex flex-col justify-center items-center space-y-6">
    <div class="text-4xl">注册</div>
    <div class="border border-black p-3 rounded-lg">
      <!-- <form action="" class="flex-col space-y-5"> -->
      <div class="border border-black p-10 bottom-10 rounded-lg">
        <table class="table-fixed">
          <tr class="h-7">
            <td>用户名：</td>
            <td><input v-model="username" placeholder="请输入用户名" class="border border-black px-2 rounded-3xl" type="text">
            </td>
          </tr>
          <tr class="h-7">
            <td>密码：</td>
            <td><input v-model="password" placeholder="请输入密码" class="border border-black px-2 rounded-3xl"
                type="password">
            </td>
          </tr>
          <tr class="h-7">
            <td>密码确认：</td>
            <td><input v-model="password2" @blur="check_password2" placeholder="请重复密码" class="border border-black px-2 rounded-3xl"
                type="password">
            </td>
          </tr>
          <tr class="h-7">
            <td>个人主页：</td>
            <td class="relative left-2 text-blue-600"><a href="main.html">个人主页</a></td>
          </tr>
          <tr class="h-7">
            <td>联系方法：</td>
            <td><input v-model="phone_number" @blur="check_phone" placeholder="请输入电话号码" class="border border-black px-2 rounded-3xl"
                type="text" name="" id="">
            </td>
          </tr>
          <tr class="h-7">
            <td>身份证：</td>
            <td><input v-model="id_number" @blur="check_id" placeholder="请输入身份证" class="border border-black px-2 rounded-3xl" type="text"
                name="" id="">
            </td>
          </tr>
          <tr class="h-7">
                            <td>兴趣爱好：</td>
                            <td class="flex justify-between">
                                <div><input type="checkbox" v-model="pe" name="hobby"> 体育</div>
                                <div><input type="checkbox" v-model="music" name="hobby"> 音乐</div>
                                <div><input type="checkbox" v-model="military" name="hobby"> 军事</div>
                            </td>
                        </tr>
          <tr class="h-7">
            <td>居住地:</td>
            <td>
              <select v-model="home" class="px-1 border border-black w-full rounded-3xl" name="">
                <option value="" disabled selected hidden>请选择所在省份</option>
                <option value="浙江">浙江</option>
                <option value="江苏">江苏</option>
                <option value="四川">四川</option>
                <option value="山东">山东</option>
                <option value="广东">广东</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
      <div class="flex justify-center space-x-10 mt-10">
        <input class="w-20 h-10 border-black border rounded-3xl" type="reset" value="重置">
        <button v-on:click="signup" class="w-20 h-10 border-black border rounded-3xl">提交</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { check_username, check_id, check_password, check_password2, check_phone } from '@/util/check'
import user from '@/model/user'
import {signUp} from '@/util/server'

export default defineComponent({
  name: 'LoginPanel',
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      phone_number: "",
      id_number: "",
      home: "",
      pe:false,
      music:false,
      military:false,
      hobby:[]
    }
  },
  methods: {
    check_id(){
      check_id(this.id_number)
    },
    check_password2(){
      check_password2(this.password,this.password2)
    },
    check_phone(){
      check_phone(this.phone_number)
    },
    signup() {
      let flag = check_username(this.username) && check_password(this.password) && check_password2(this.password, this.password2) && check_phone(this.phone_number) && check_id(this.id_number)
      if (flag) {
        let gender = (parseInt(this.id_number.charAt(16)) % 2 === 1)?"male":"female"
        let birthday = this.id_number.substring(6, 10) + "-" + this.id_number.substring(10, 12) + "-" + this.id_number.substring(12, 14)
        this.hobby = []
        if(this.pe){
          (this.hobby as string[]).push("pe")
        }
        if(this.music){
          (this.hobby as string[]).push("music")
        }
        if(this.military){
          (this.hobby as string[]).push("military")
        }
        let user:user = {
          username: this.username,
          gender:gender,
          password: this.password,
          phone_number: this.phone_number,
          id_number: this.id_number,
          home: this.home,
          birthday:birthday,
          hobby:this.hobby
        }
        signUp(user)
      }
    }
  }
});
</script>
