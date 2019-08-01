import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import Footer from '../component/footer'
import "../sass/shop.scss"
import Returns from '../component/returns'
import {Icon} from "antd";
import {inject, observer} from 'mobx-react';
@inject('fication')
@observer
class Shop extends Component {
	state={
		check:false,//单选
		edit:false,//编辑
		IteId:null
	}
    render() {
			const number=this.props.location.number.number||''//数量
			let {check,edit,IteId}=this.state
        return (
            <div className="wrap">
            	<div className="header">
					        <Returns/>
									{
										this.props.fication.shoppingList.cartList&&this.props.fication.shoppingList.cartList.map((item,index)=>{
											 return <div className="shopSection" key={item.id} style={{
												  display:edit===true?'none':'block'
											 }}>
					           <div className="shopse">
										
						             <div className="isCheckItem" onClick={()=>{
													 
													  this.setState({
															check:!check
														})
												 }}>
						                  {
																this.Image(check)
															}
						             </div>
												 <div className="goodsImg">
													  <img src={item.list_pic_url}/>
												 </div>
												 <div className="cartGoodsMsg">
															<p>{item.goods_name}</p>
															<em>￥{item.market_price}</em>
												 </div>
							           <i>×1</i>
					           </div>
					       </div>
										})
									}
									 {
										 this.props.fication.shoppingList.cartList&&this.props.fication.shoppingList.cartList.map((ite,ind)=>{
											   return <div className="shopse_copy" style={{
												  display:edit===true?'block':'none'
											 }}>
											   			<div className="isCheckItem" onClick={()=>{
																	this.setState({
																		check:!check,
																		IteId:ite.id
																	})
																	
												      }}>
											   					{
																		 this.Image(check)
																	}
											   				</div>
											   				<div className="shopes_img">
											   						<div className="goodsImg" onClick={()=>{
																			 console.log(ite.id)
																			
																		}}>
											   									<img src={ite.list_pic_url}/>
											   						</div>
											   						<div className="cartGoodsMsg">
											   								<p>以选择</p>
											   								<em>￥{ite.market_price}</em>
											   						</div>
											   						<div className="input">
											   								<em onClick={()=>{
											   									this.add('add',number+1)
											   								}}>+</em>
											   								<input type="text" value={number} ref="input"/>
											   								<em onClick={()=>{
											   									this.add('rem',(number-1))
											   								}}>-</em>
											   							</div>
											   				</div>
											   		</div>
											   
										 })
									 }
										
									
								 <div className="cartGoodsDo">
										 <div className="isCheckItem">
												<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="/>
										 </div>
										 <div className="cartMsgAll">
												已选(0) $49
										 </div>
										 <span className="cartAllDoButton" onClick={()=>{
											    this.setState({
														edit:!edit
													})
										 }}>{edit===false?'编辑':'完成'}</span>
										 <span className="cartAllDoButton_play" onClick={()=>{
											  console.log('99')
										 }} onClick={()=>{
											  this.edit(edit,IteId)
										 }}>{edit===false?'下单':'删除所有'}</span>
									 </div>
							</div>
            	<Footer/>
            </div>
        )
    }
		componentDidMount(){
			const number=this.props.location.number.number||''//数量
			const productId=this.props.location.productId.productId||''//价格
			const goodsId=this.props.location.state.goodsId||''//id
			this.props.fication.adds({goodsId:goodsId+'',productId:productId,number:number})

		}
		Image(check){
			 if(check===false){
				  return <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"/>
			 }else{
				  return <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="/>
       }
		}
	  add(type,num){//加
	  	if(type==='add'){
	  		this.setState({
	  			number:num
	  		})
	  	}else if(type==='rem'){//减
	  		if(num<=0){
	  			return
	  		}
	  			this.setState({
	  				number:num
	  			})
	  	
	  	}
	  }
		edit(edit,IteId){
			if(edit===true){
				//删除商品
				 let delId=this.props.fication.shoppingList.cartList&&this.props.fication.shoppingList.cartList.map((item) => item.product_id).join(',')
				 this.props.fication.deletest({productIds:delId+""})
				 this.props.fication.shoppings()
			}
		}
}
export default (withRouter(Shop))
