import React, { Component } from 'react'
import "./login.scss"
import {Button} from "antd"
 class Login extends Component {
    render() {
        return (
            <div className="loginBox">
            <div className="logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
            <div className="loginMain">
              <div className="inputWrap onePx_bottom">
                <input type="text" ref="phoneNumber" defaultValue={15323807318} placeholder="请输入手机号码" />
              </div>
              <div className="inputWrap onePx_bottom">
                <input type="password" ref="passwords" defaultValue={123456} placeholder="请输入登录密码" />
              </div>
              <div className="loginBtn">
                <Button type="primary" onClick={console.log("登陆")} className="btn">登录</Button>
              </div>
            </div>
          </div>
        )
    }
}
export default Login
