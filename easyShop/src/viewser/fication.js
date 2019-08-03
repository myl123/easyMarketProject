import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import Footer from '../component/footer';
import {inject, observer} from 'mobx-react';
import BScroll from 'better-scroll';
import '../sass/fication.scss';
import router from '../router/router';
import Ficat from '../component/ficat';
@inject('fication')
@observer
class Fication extends Component {
	state={
		 currentId:null,
		 target:null,
		 goods:null,//分类下面的内容
		 tabColor:false,
		 IteId:1005000,
		 Id:1005000
	}
    render() {
			let {history}=this.props;
			let {currentId,target,goods,tabColor,IteId,Id}=this.state;
        return (
             <div className="wrap">
								<div className="header">
									<div className="searchWrap">
										<div className="searchInput" onClick={()=>{
													  history.push(`/goodsSearch`)
												}}>
												<span>搜索商品，共239款好物</span>
										</div>
									</div>
									<div className="tabPageContent">
									{/*渲染左边数据*/}
								     <ul className="tabsWrap" ref="tabsWrap" >
											  {
													this.props.fication&&this.props.fication.data.map(item=>{
														return <li key={item.id} onClick={()=>{
															this.props.fication.current(item.id);{/*点击的时候请求接口把id传过去*/}
															target=this.props.fication.data.map((ite)=>{//点击左边右边数据发生改变
																  return this.tail(ite,item,goods)
															})
															 this.tabColors(item,item.id,tabColor,IteId)
														}} style={{
															 color:IteId==item.id?'#2196f3':null,
															 borderLeft:IteId==item.id?'.01rem solid #2196f3':null,
														}}>{item.name}</li>
													})
												}
											</ul>
											<div className="categogContet">
											   <Ficat ficat={this.props.fication.data} currentId={this.props.fication.currId} goods={goods} Id={Id}/>
											</div>
									</div>
								</div>
							 <Footer/>
					   </div>
				)
    }
		componentDidMount(){
			this.props.fication.getData();
		}
		tail(ite,item,goods){
			 if(ite.id===item.id){
				  return this.setState({
						 goods:ite.goodsList
					})
			 }
		}
		//左边颜色切换
	  tabColors(item,itemId,tabColor,IteId){
			if(item.id===itemId){
				 this.setState({
						IteId:itemId
				 })
			}else{
				 this.setState({
					IteId:itemId
				 })
			}
		}
}
export default (withRouter(Fication))
