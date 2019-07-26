import React, { Component } from 'react'
import Footer from '../component/footer';
import '../sass/goodsSearch.scss';
import { Icon } from 'antd';
import { BrowserRouter as Router,withRouter} from "react-router-dom";
class GoodsSearch extends Component {
	state={
		data:[],
		localData:[],
		valCont:null//input值
	}
    render() {
			let {data,localData,valCont}=this.state;
        return (
            <div className="noTabPageContent">
            	<ul className="searchInputWrap">
							{/*点击返回上一页*/}
				    <li onClick={()=>{
							 this.props.history.go(-1)
						}}>&lt;</li>
					<li>
					     <Icon type="search"/>
							 {/*获取到value值之后储存起来进行渲染*/}
							 <input type="text" placeholder="520元礼包抢先领" onBlur={(e)=>{
								 
								 this.value(e.target.value,data)
							 }} ref="input"/>
					</li>
					<li onClick={()=>{
						{/*清楚input值*/}
						  valCont=this.refs.input;
							valCont.value=''
					}}>取消</li>
				</ul>
				<div className="searchMsg">
				   <div className="searchItemWrap">
				       <ul className="title">
					      <li>历史纪录</li>
						  <li><Icon type="delete" /></li>
					   </ul>
					   <ol className="listWrap">
						   {
									JSON.parse(localStorage.getItem('set')).map((item,index)=>{
										console.log(item)
											return <li>{item}</li>
									})
							 }
					   </ol>
				   </div>
				   <div className="searchItemwrap">
				      <p className="title">热门搜索</p>
					  <div className="listWrap">
							 <button className="listItem">520元礼包抢先领</button>
							 <button className="listItem">夏ss</button>
							 <button className="listItem">单鞋</button>
							 <button className="listItem">夏凉被</button>
							 <button className="listItem">墨镜</button>
					  </div>
				   </div>
				</div>
            </div>
        )
    }
		value(val,data){
			//获取值进行本地储然后渲染到本地
			 let net=JSON.parse(localStorage.getItem('set'))||[];
			 net.push(val)
			 localStorage.setItem('set',JSON.stringify(net))
			
		}
}
export default (withRouter(GoodsSearch))
