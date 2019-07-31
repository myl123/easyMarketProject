import { observable, action } from "mobx";
import {loginData} from "../../services/logins"

import {setToken} from '../../utils/index'
import cookie from 'react-cookies'
export default class Login{
    // @action 修饰方法
    @observable loginUser=""

    @action  async getLogin(phone,pwd){
        let data=await loginData({mobile:phone,password:pwd})
        console.log(data)
        if (data.errno == 0) {
            // cookie.save("sessionKey",data.data.sessionKey)
            this.loginUser = data.data;
            setToken(data.data.sessionKey);
        } else {
            this.loginUser = 1;
        }
}
    
}
