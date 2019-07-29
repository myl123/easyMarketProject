import React, { Component } from 'react'
import Footer from '../component/footer';
import Nav from '../component/nav';
import {inject, observer} from 'mobx-react';
import * as Swiper from 'swiper/dist/js/swiper.js';
import "swiper/dist/css/swiper.min.css"
import '../sass/goods.scss'
import Good from '../component/good'
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
@inject('fication')
@observer
class Goods extends Component {
	 
    render() {
	  let {issue}=this.props.fication.detailsList
		let {name}=this.props.location.state;
		let {id}=this.props.location.id||[];
		
		let {goods_brief,retail_price}=this.props.fication.detailsList.length!=0&&this.props.fication.detailsList.info
		return (
            <div className="wrap">
            	<Nav title={name}/>
				<div className="am-carousel">
				   <div className="slider-frame">
				      <div className="swiper-container">
							{
								console.log(this.props)
							}
									 <div className="swiper-wrapper">
											 <div className="swiper-slide" >
											 		<img src="http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg" alt="" />
											 </div>
											 <div className="swiper-slide" >
											  	<img src="http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg" alt="" />
											 </div>
									 </div>
									 <div className='swiper-pagination'></div>
						</div>
				   </div>
				   <ul>
				   	<li>
				   		<span>★</span>
				   		<span>30天无忧退货</span>
				   	</li>
				   	<li>
				   		<span>★</span>
				   		<span>48小时快速退款</span>
				   	</li>
				   	<li>
				   		<span>★</span>
				   		<span>满88元免邮费</span>
				   	</li>
				   </ul>
				   <div className="goodsMsgWrap">
				      <ul>
								 <li>{name}</li>
								 <li>{goods_brief}</li>
								 <li>{retail_price}</li>
								 <li> 
										<span>× 0</span>
									<span>选择规格 <em>&gt;</em></span>
								 </li>
             </ul>
				   </div>
				<Good title="商品参数"/>
				 <div className="goodsAttribute">
				    <Good title="常见问题"/>
						<div className="problem">
						    {
									issue&&issue.map((item,index)=>{
										 return <ul> 
										   <li>
													<span>√</span>
													<span>{item.question}</span>
											 </li>
											 <li>{item.answer}</li>
							   	</ul>
									}) 
								}
						</div>
				 </div>
				 <Good title="大家都在看"/>
         <div className="categorydetil">
				    {
							this.props.fication.categoList.goodsList&&this.props.fication.categoList.goodsList.map((item,index)=>{
							return <ol key={index}>
										<li><img src={item.list_pic_url}/></li>
										<li>{item.name}</li>
										<li>{item.retail_price}</li>
								</ol>
							})
						}
				 </div>
				</div>
      </div> 
        )
    }
	componentDidMount(){
		let {id}=this.props.location.id||[];
		this.props.fication.detas(id)//标题
		this.props.fication.relate(id)//大家看底下内容
		var mySwiper = new Swiper('.swiper-container', {
				loop: true,//这里是自动轮播
				autoplay: {
						delay: 1000,
						disableOnInteraction: false
				},
				pagination: {
						el: '.swiper-pagination',//这里是分页器设置
						type:"bullets"
				},
				observer:true,
				observerParents:true
		});
 }
  
}
export default (withRouter(Goods))