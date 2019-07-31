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
    render() {
			const number=this.props.location.pathname.substr(6)
        return (
            <div className="wrap">
            	<div className="header">
					        <Returns/>
									{
										this.props.fication.shoppingList.cartList&&this.props.fication.shoppingList.cartList.map((item,index)=>{
											 return <div className="shopSection" key={item.id}>
					           <div className="shopse">
						             <div className="isCheckItem">
						                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="/>
						             </div>
												 <div className="goodsImg">
													  <img src={item.list_pic_url}/>
												 </div>
												 <div className="cartGoodsMsg">
															<p>{item.goods_name}</p>
															<em>￥{item.market_price}</em>
												 </div>
							           <i>×{number}</i>
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
										 <span className="cartAllDoButton">编辑</span>
										 <span className="cartAllDoButton_play">下单</span>
									 </div>
							</div>
            	<Footer/>
            </div>
        )
    }
		componentDidMount(){
			 this.props.fication.shoppings()
		}
}
export default (withRouter(Shop))
