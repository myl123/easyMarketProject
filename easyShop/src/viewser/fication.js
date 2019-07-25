import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import Footer from '../component/footer';
import {inject, observer} from 'mobx-react';
import '../sass/fication.scss';
import router from '../router/router';
import Ficat from '../component/ficat';
@inject('fication')
@observer
class Fication extends Component {
	state={
		 currentId:null,
		 target:null,
		 goods:null//分类下面的内容
	}
    render() {
			let {history}=this.props;
			let {currentId,target,goods}=this.state;
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
											<ul className="tabsWrap">
											  {
													this.props.fication&&this.props.fication.data.map(item=>{
														return <li key={item.id} onClick={()=>{
															
                              this.props.fication.current(item.id);{/*点击的时候请求接口把id传过去*/}
															target=this.props.fication.data.map((ite)=>{
																  return this.tail(ite,item,goods)
															})
															console.log(target)
														}}>{item.name}</li>
													})
												}
												<li></li>
											</ul>
											<div className="categogContet">
											   <Ficat fication={this.props.fication.data} currentId={this.props.fication.currId} goods={goods}/>
											</div>
									</div>
								</div>
							 <Footer/>
					   </div>
				)
    }
		componentDidMount(){
			this.props.fication.getData()
		}
		tail(ite,item,goods){
			 if(ite.id===item.id){
				  return this.setState({
						 goods:ite.goodsList
					})
			 }
		}
}
export default (withRouter(Fication))
