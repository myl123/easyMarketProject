import React, { Component } from 'react';
import Footer from '../component/footer';
import {inject, observer} from 'mobx-react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import Nav from '../component/nav'
import '../sass/categorys.scss'
@inject('fication')
@observer
class Categorysc extends Component {
	state={
		bool:false,
		itemId:null,
		arr:[],
		bole:true,
		colorId:this.props.location.pathname.substr(12)
	}
    render() {
		const id=this.props.location.pathname.substr(12);
		let {bool,itemId,arr,bole,scrollColor,colorId}=this.state;
		let {history}=this.props;
		
        return (
            <div className="wrap">
								<Nav title="奇趣分类"/>
								
								<ol className="am-tabs">
								   
								   {
								   	this.props.fication.gory.brotherCategory&&this.props.fication.gory.brotherCategory.map((item,index)=>{
											 return <li key={item.id} onClick={()=>{
												 {/*点击的时候颜色的切换*/}
												   this.addStyle(item.id,id)
													 this.props.fication.catego(item.id)
													 this.setState({
														 itemId:item.id
													 })
													 this.setState({
													 	  colorId:item.id
													 })
													 if(this.props.fication.categoList.length===0){
														 this.setState({
															 bole:false
														 })
													 }
													 {/*颜色切换*/}
													
												}} ref="li" style={{
												   color:item.id==colorId?'#108ee9':null,
													 borderBottom:item.id==colorId?'.02rem solid #108ee9':null
											 }}>{item.name}</li>
								   	})
										
								   }
							  </ol>
								<div className="category_cont">
								   <div className="categoryDetail">
								   	{
								   	this.props.fication.gory.brotherCategory&&this.props.fication.gory.brotherCategory.map((item,index)=>{
								   			return this.introduce(itemId,item,id,this.props.fication.gory.brotherCategory,arr)
								   		})
								   	}
								   </div>
								   <div className="categorydetil">
									
								   		{
								   			this.detil(id,history)
                      }
										
								   </div>
								</div>
           </div>
        )
    }
	componentDidMount(){
    const id=this.props.location.pathname.substr(12);
		this.props.fication.goodsCat(id);
		this.setState({
				scrollColor:id
		})
	}
	//颜色切换
	addStyle(itemId,id){
		this.setState({
			  id:itemId
		})
	}
	
	 //简介介绍
	 introduce(itemId,item,id,brotherCategory,arr){
		 if(itemId===item.id){
			 return <React.Fragment key={item.id}>
				  <p>{item.name}</p>
				  <p>{item.front_name}</p>
				</React.Fragment>
		 }else if(itemId===null){
       if(id==item.id){
					return <React.Fragment key={item.id}>
					   <p>{item.name}</p>
						 <p>{item.front_name}</p>
					</React.Fragment>
        }
		  }
	 }
	 //详情切换
	detil(id,item,bole){
	  let {history}=this.props;
		if(bole==true){
			   return <p></p>
		 }else{
			  return this.props.fication.categoList.data&&this.props.fication.categoList.data.map((item,index)=>{
			  	let name=item.name;
					return <ol key={index} onClick={()=>{
 history.push({ pathname:'/goodst',state:{name : name },id:{id:item.id},retail:{retail:item.retail_price} })
					}}>
			  				<li><img src={item.list_pic_url}/></li>
			  				<li>{item.name}</li>
			  				<li>{item.retail_price}</li>
			  		</ol>
			  })
		 }
		
			 
	}
}
export default (withRouter(Categorysc))
