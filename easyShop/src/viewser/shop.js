import React, { Component } from 'react'
import Footer from '../component/footer'
import "../sass/shop.scss"
import Returns from '../component/returns'
import {Icon} from "antd"
class Shop extends Component {
    render() {
        return (
            <div className="wrap">
            	<div className="header">
					  <Returns/>
					 <div className="shopSection">
					    <div className="shopse">
						<div className="isCheckItem">
						  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="/>
						</div>
						 <div className="goodsImg">
							<img src="http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png"/>
						</div>
							 <div className="cartGoodsMsg">
								<p>简约知性记忆棉坐垫</p>
								<em>$46</em>
							 </div>
							 <i>x1</i>
						</div>
					
					 </div>
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
}
export default Shop
