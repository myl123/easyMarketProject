import { observable, action } from "mobx";
import {loginData} from "../../services/logins"
import cookie from 'react-cookies'
export default class Login{
    // @action 修饰方法
    @observable loginUser=''

    @action  getLogin(params){
        console.log(params)
        // cookie.save("token",params)
        let data=({mobile:params.mobile,password:params.password})
        console.log(data)
        loginData(params).then((res)=>{
            // this.loginUser=data
            console.log(res.errno)
            if(res.errno===0){
                let cookiesdata=res.data.sessionKey
                console.log(cookiesdata)
                cookie.save("token",cookiesdata)
                this.loginUser = data.errno;

            }else{
                this.loginUser = 1;

            }
        })
}
    
}