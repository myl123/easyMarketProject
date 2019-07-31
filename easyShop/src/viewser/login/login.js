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
        <input type="text"   placeholder="请输入手机号码"
        defaultValue="15323807318"
        onChange={(e)=>{
               this.setState({
                value: e.target.value,
                defaultValue: e.target.defaultValue
            });
           
            this.changePhone(e,phone,defaultValue)
        }}/>
      </div>
      <div className="inputWrap onePx_bottom">
        <input type="password"  placeholder="请输入登录密码"
        defaultValue="123456"
        onChange={(e,pwd)=>{
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

submit=()=>{
  let { phone, pwd } = this.state;

  let net=JSON.parse(localStorage.getItem('phone'))||[];
  net.push(phone)
  localStorage.setItem('phone',JSON.stringify(net))

  console.log(phone,pwd)
  this.props.login.getLogin(phone,pwd)
  console.log(this.props.login)
  // this.props.login.getLogin({phone,pwd}).then(res=>{
  //   console.log(res)
  // })
  if(this.props.login.loginUser==0){
    console.log(this.props)
    this.props.history.push('/home')
  }else if(this.props.login.loginUser==1){
    alert("有误")
  }
  this.setState({
    phone: '',
    pwd: ''
})

}

}
export default (withRouter(Login))
