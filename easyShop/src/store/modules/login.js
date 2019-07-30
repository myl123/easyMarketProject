import { observable, action } from "mobx";
import {loginData} from "../../services/logins"
import cookie from 'react-cookies';
import { setToken } from "../../utils/index"
export default class Login{
    // @action 修饰方法
    @observable loginUser=''

    @action  getLogin(params){
        // cookie.save("token",params)
        let data=({mobile:params.mobile,password:params.password})
        loginData(params).then((res)=>{
            // this.loginUser=data
            console.log(res.data,'ee')
            if(res.errno===0){
                let cookiesdata=res.data.sessionKey
                setToken("x-nideshop-token",cookiesdata)
                this.loginUser = res.errno;

            }else{
                this.loginUser = res.errno;

            }
        })
}
    
}