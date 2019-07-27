import React, { Component } from 'react'
import Footer from '../component/footer';
import '../sass/goodsSearch.scss';
import { Icon } from 'antd';
import {inject, observer} from 'mobx-react';
import { BrowserRouter as Router,withRouter} from "react-router-dom";
@inject('fication')
@observer
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
								 this.props.fication.keywordVal(e.target.value)//模糊搜索//暂时还没做
                  console.log(this.props)
								  this.value(e.target.value,data)
							 }} ref="input" onKeyup="this.value=this.value.replace(/^\s+|\s+$/g,'')"/>
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
						   <li onClick={()=>{
								  localStorage.removeItem('set')
							 }}><Icon type="delete"/></li>
					   </ul>
					   <ol className="listWrap">
						 {
							 this.tail(JSON.parse(localStorage.getItem('set')))

						 }
					   </ol>
				   </div>
				   <div className="searchItemwrap">
				      <p className="title">热门搜索</p>
							{/*热门搜索*/}
					  <div className="listWrap">
						   {
								 this.props.fication.searchs.hotKeywordList&&this.props.fication.searchs.hotKeywordList.map((item,index)=>{
										return <button className="listItem" key={item.is_hot}>{item.keyword}</button>
								 })
							 }
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
		//历史纪录 如果清楚本地储存那么为空表情否则为渲染的数据
		tail(getItems){
			 if(getItems==null){
				  return <p></p>
			 }else{
					return getItems.map((item,index)=>{
						return <li>{item}</li>
					})
			 }
		}
		componentDidMount(){
			this.props.fication.sear()//热门搜索
			
		}
}
export default (withRouter(GoodsSearch))
