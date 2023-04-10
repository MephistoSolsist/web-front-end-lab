import axios from 'axios'
import user from '@/model/user'
import {Md5} from 'ts-md5'

const signUp = (user:user)=>{
    axios.post('http://127.0.0.1:5000/signup', {
        username: user.username,
        password: Md5.hashStr(user.password).toUpperCase(),
        gender: user.gender,
        phone_number: user.phone_number,
        id_number: user.id_number,
        home: user.home,
        birthday: user.birthday,
        hobby:user.hobby
      })
      .then(function (response) {
        alert(response.data.msg)
      })
      .catch(function (error) {
        console.log(error);
      })
}

export {signUp}
