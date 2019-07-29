import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import BScroll from 'better-scroll';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
@inject('fication')
@observer
 class Ficat extends Component {
	 render() {
		let {ficat,currentId,id,goods}=this.props;
        return (
					<>
						 <span key={currentId.id}>
						 {/*渲染图片和下面标题*/}
						  { <>
								    <img src={currentId.banner_url}/>
										<em>{currentId.front_name}</em>
								 </>
							 }
						 </span>
						 {/* 分类*/}
						 {this.tail(ficat,currentId)}
						 <ol className="subCategory">
								{
									this.goodFication(goods,ficat)
								}
								{
									currentId.subCategoryList&&currentId.subCategoryList.map((item,index)=>{
										return <li onClick={()=>{

											   this.props.history.push(`/categorysc/${item.id}`)
											}}>
												<span><img src={item.wap_banner_url}/></span>
												<span>{item.name}</span>
										</li>
									})
								}
						 </ol>
					</>
        )
    }
		//分类
		tail(ficat,currentId){
				return ficat.map((item,index)=>{
					 if(item.id===1005000){
							 if(currentId.name){
								 return <p key={index}>-  {currentId.name}分类 -</p>
							 }else{
								  return <p key={index}>-  {item.name}分类 -</p>
							 }
					 }
				})
		}
	 //分类下面的
	 goodFication(goods,ficat){
		  if(!goods){
				 return ficat.map((item,index)=>{
				 	if(item.id===1005000){
				 			return item.goodsList.map((ite,ind)=>{
								 return <li  onClick={()=>{

						  }}>
								 		<span><img src={ite.list_pic_url}/></span>
								 		<span>{item.name}</span>
								 </li>
							})
				  	}
				 })
			}
	 }
	 
}
export default (withRouter(Ficat))
