import { observable, action } from "mobx";
import {loginData} from "../../services/logins"
import cookie from 'react-cookies'
export default class Login{
    // @action 修饰方法
    @observable loginUser=''

    @action  async getLogin(phone,pwd){
        let data=await loginData({mobile:phone,password:pwd})
        console.log(data)
        if (data.errno == 0) {
<<<<<<< HEAD
<<<<<<< HEAD
            cookie.save("sessionKey",data.data.sessionKey)
=======
            cookie.save("token",data.data.sessionKey)
>>>>>>> 5fd07e9a0068debcf86bfb9fbba8f9729f934013
=======
            cookie.save("sessionKey",data.data.sessionKey)
>>>>>>> mengyali
            this.loginUser = data.errno;
        } else {
            this.loginUser = 10;
        }
}
    
}