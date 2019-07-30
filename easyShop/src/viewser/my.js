import React, { Component } from 'react'
import Footer from '../component/footer';
import { inject, observer } from 'mobx-react';
import "../sass/my.scss"
import '../font/demo.css';
import '../font/iconfont.css';
@inject('login')
@observer
class My extends Component {
    render() {
			console.log(this.props)
        return (
            <div className="wrap">
            	<div className="header">
					<div className="myTop">
					   <div className="userLogo"></div>
						<div className="userMsgs">
						   {/*取值*/}
						   {
								 this.phone(JSON.parse(localStorage.getItem('phone')))
							 }
							 {/*
							   JSON.parse(localStorage.getItem('phone')).map((item,index)=>{
							   	return <div>{item}</div>
							   })
							 */}
							<div>普通用户</div> 
						</div>
					 </div>
						
					
					<div className="myBottom">
						<ul>
						
						   <li className="icon iconfont icon-shoucang"></li>
						   <li>我的收藏</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-dizhiguanli"></li>
							<li>我的地址</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-dingdan"></li>
							<li>我的订单</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-yanchurili"></li>
							<li>周末拼单</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-youhuiquan"></li>
							<li>优惠券</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-daifukuan"></li>
							<li>优选购</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-tupian"></li>
							<li>我的红包</li>
						</ul>
						<ul>
						    <li className="icon iconfont icon-huiyuan"></li>
							<li>会员plus</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-weishiyong"></li>
							<li>邀请返利</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-rongna"></li>
							<li>意见反馈</li>
						</ul>
						<ul>
							<li className="icon iconfont icon-xiaoxi"></li>
							<li>客服咨询</li>
						</ul>
						<ul>
						    <li className="icon iconfont icon-zhuanru"></li>
							<li>账户安全</li>
						</ul>
						<button>退出登录</button>
          </div>
				</div>
				<Footer/>
     </div>
        )
    }
		phone(phon){
			 return <div>{phon[0]}</div>
		}
}
export default  My
