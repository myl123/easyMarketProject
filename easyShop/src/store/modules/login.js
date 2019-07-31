import { observable, action } from "mobx";
import {loginData} from "../../services/logins"
<<<<<<< HEAD
import cookie from 'react-cookies';
=======

import {setToken} from '../../utils/index'
import cookie from 'react-cookies'
>>>>>>> houfaxing
export default class Login{
    // @action 修饰方法
    @observable loginUser=""

    @action  async getLogin(phone,pwd){
        let data=await loginData({mobile:phone,password:pwd})
       let val=JSON.parse(localStorage.getItem('val'))||[];
		   val.push(data.data.sessionKey)
		   localStorage.setItem('val',JSON.stringify(val))
        if (data.errno == 0) {
            // cookie.save("sessionKey",data.data.sessionKey)
            this.loginUser = data.data;
            setToken(data.data.sessionKey);
        } else {
            this.loginUser = 1;
        }
}
    
}
