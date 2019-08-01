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
		IteId:null,
		ItemsId:null,
		ImgCheck:false,
		checkeded:null,
		product:null,
		num:null,
		money:null,
		checkouts:false
	}
    render() {
			// const number=this.props.location.number.number||'';//数量
			let {check,edit,IteId,number,ItemsId,ImgCheck,checkeded,product,num,money,checkouts}=this.state
        return (
            <div className="wrap">
            	<div className="header">
					        <Returns/>
									
									{
										this.props.fication.shoppingList&&this.props.fication.shoppingList.map((item,index)=>{
											  return <div className="shopSection" key={item.id} style={{
												  display:edit===true?'none':'block'
											 }}>
					           <div className="shopse">
										       
						             <div className="isCheckItem" onClick={()=>{
													 this.setState({
															check:!check,
															ItemsId:item.id,
															checkeded:item.checked,
															product:item.product_id

														})
												 }}>
													<img src={item.checked===1 ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' 
														: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'
													} onClick={this.handIsChended.bind(this,item.product_id,item.checked,num,money)}/>
						             </div>
												 <div className="goodsImg">
													  <img src={item.list_pic_url}/>
												 </div>
												 <div className="cartGoodsMsg">
															<p>{item.goods_name}</p>
															<em>￥{item.market_price}</em>
												 </div>
							           <i>×{item.number}</i>
					           </div>
					       </div>
										})
									}
									 {
										 this.props.fication.shoppingList&&this.props.fication.shoppingList.map((ite,ind)=>{
											   return <div className="shopse_copy" style={{
												  display:edit===true?'block':'none'
											 }} key={ind}>
											   			<div className="isCheckItem" onClick={()=>{
																		this.setState({
																			check:!check,
																			IteId:ite.product_id,
																			ItemsId:ite.id,
																		  
																		})
																	}}>
																	<img src={ite.checked===1 ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' 
																		: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC'
																	} onClick={this.handIsChended.bind(this,ite.product_id,ite.checked,num,money)}/>
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
											   									this.add('add',ite.goods_id,ite.id,ite.number+1,ite.product_id)
											   								}}>+</em>
											   								<input type="text" value={ite.number} ref="input"/>
											   								<em onClick={()=>{
											   									this.add('rem',ite.goods_id,ite.id,ite.number-1,ite.product_id)
											   								}}>-</em>
											   							</div>
											   				</div>
											   		</div>
                       })
									 }
										
									
								 <div className="cartGoodsDo">
										 <div className="isCheckItem" onClick={()=>{
											 this.setState({
												 checkouts:!checkouts
											 })
											    this.chekouts(checkouts)
										 }}>
												<img src={checkouts===false?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC":
												"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="}/>
										 </div>
										 <div className="cartMsgAll">
										 
												已选({this.props.fication.upCheckedsListNum.checkedGoodsCount}) ￥{this.props.fication.upCheckedsListNum.checkedGoodsAmount} 
										 </div>
										 <span className="cartAllDoButton" onClick={()=>{
											    this.setState({
														edit:!edit
													})
										 }}>{edit===false?'编辑':'完成'}</span>
										 <span className="cartAllDoButton_play" onClick={()=>{
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
			this.props.fication.shoppings()
		}
	 //单选
	 // num,money
		handIsChended(prodId,checked,num,money){
	
			if(checked===1){
				this.props.fication.upCheckeds({isChecked:0,productIds:prodId})
				
			}else{
				this.props.fication.upCheckeds({isChecked:1,productIds:prodId})
			}
			this.setState({
				  num:this.props.fication.upCheckedsListNum.checkedGoodsCount,
					money:this.props.fication.upCheckedsListNum.goodsAmount

			})
			//只要有一个不选则不选否则全选
			let checkted=this.props.fication.shoppingList.every(function(item,index){
				  return item.checked
			})
			if(checkted===true){
				 this.setState({
					  checkouts:false
				 })
			}else{
				this.setState({
					checkouts:true
				})
			}
		}
		//加减
	  add(type,goodsId,id,number,productId,item){//加
		if(type==='add'){
       this.props.fication.up_Count({goodsId:goodsId,id:id,number:number,productId:productId})
    }else if(type==='rem'){
       
		}
		 this.props.fication.up_Count({goodsId:goodsId,id:id,number:number,productId:productId})  
	  }
		edit(edit,IteId){
			
			if(edit===true){
				//删除商品
				 let delId=this.props.fication.shoppingList&&this.props.fication.shoppingList.map((item) => item.product_id).join(',')
				 if(IteId==delId){
					 console.log(delId)
				 }
				 this.props.fication.deletest({productIds:IteId+""})
				 this.props.fication.shoppings()
			}
		}
		//全选
		chekouts(checkout){
			if(checkout===false){
				this.props.fication.shoppingList.map((item,index)=>{
					  this.props.fication.upCheckeds({isChecked:1,productIds:item.product_id+''})
				})
				
			}else{
				 this.props.fication.shoppingList.map((item,index)=>{
				 		this.props.fication.upCheckeds({isChecked:0,productIds:item.product_id+''})
				 })
			}
   }
		
}
export default (withRouter(Shop))
