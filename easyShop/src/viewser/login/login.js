import React, { Component } from 'react'
import "./login.scss"
import {Button} from "antd"
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
@inject('login')
@observer

 class Login extends Component {
   
  state = {
    phone: "",
    pwd: "",
    InputValue:"15323807318",
    InputPaw:'123456',
    defaultValue:''
}
render() {
let {phone,pwd,InputValue,InputPaw,defaultValue}=this.state
return (
    <div className="loginBox">
    <div className="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
    </div>
    <div className="loginMain">
      <div className="inputWrap onePx_bottom">
        <input type="text"   placeholder="请输入手机号码" onChange={(e)=>{
               this.setState({
                value: e.target.value,
                defaultValue: e.target.defaultValue
            });
           
            this.changePhone(e,phone,defaultValue)
        }}/>
      </div>
      <div className="inputWrap onePx_bottom">
        <input type="password"  placeholder="请输入登录密码"onChange={(e,pwd)=>{
               this.setState({
                value: e.target.value,
                defaultValue: e.target.defaultValue
            });
            this.changePass(e,pwd,defaultValue)
        }}/>
      </div>
      <div className="loginBtn">
        <Button type="primary"  className="btn" onClick={()=>{
           this.submit(phone,pwd,defaultValue)
        }}>登录</Button>
      </div>
    </div>
  </div>
)
}

changePhone(e){
    this.setState({
      phone: e.target.value
  });
}
changePass(e){
  this.setState({
    pwd: e.target.value
});
}

submit(phone,pwd){
  console.log(phone,pwd)
  this.props.login.getLogin({mobile:phone,password:pwd})
  console.log(this.props.login)
  if(this.props.login.loginMobile!==""&&this.props.login.loginPassword!==""){
    // alert("登陆")
     this.props.history.push('/home')
  }else{
    // alert("您的用户名或密码没有输入")
    return
  }
  // this.props.history.push('/home')
}

}
export default (withRouter(Login))
