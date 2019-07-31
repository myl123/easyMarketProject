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
		edit:false//编辑
	}
    render() {
			// const number=this.props.location.pathname.substr(6)//数量
			let {check,edit}=this.state
			console.log(this.props,'99')
        return (
            <div className="wrap">
            	<div className="header">
					        <Returns/>
									{
										console.log(this.props.fication)
									}
									{
										this.props.fication.shoppingList.cartList&&this.props.fication.shoppingList.cartList.map((item,index)=>{
											 return <div className="shopSection" key={item.id}>
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
									
								 <div className="cartGoodsDo">
										 <div className="isCheckItem">
												<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="/>
										 </div>
										 <div className="cartMsgAll">
												已选(0) $49
										 </div>
										 <span className="cartAllDoButton" onClick={()=>{
											  console.log('edit')
										 }}>编辑</span>
										 <span className="cartAllDoButton_play">下单</span>
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
}
export default (withRouter(Shop))
