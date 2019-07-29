import React, { Component } from 'react'
import { Button } from "antd"
import { withRouter } from "react-router-dom";
import * as Swiper from 'swiper/dist/js/swiper.js';
import { inject, observer } from 'mobx-react';
import "swiper/dist/css/swiper.min.css"
import { Icon } from 'antd';
import BackIcon from "../../component/back"
import "./index.scss"

@inject('home')
@observer
class Good extends Component {
render() {
console.log(this.props.home)
let data = this.props.history.location.pathname.substr(7)
return (
  <div className="goodsContent">
{
  this.props.home && this.props.home.infodata.map(item => {
    return <div key={item.id} className="goodsTop">
      <p>
        <span><BackIcon /></span>
        <b>{item.name}</b>
      </p>
    {/* swier */}
    <div className="swiper-nr">
    <div className="swiper">
    <div className="swiper-container">
        <div className="swiper-wrapper">
            {this.props.home && this.props.home.gallerydata.map(item => (
                <div className="swiper-slide" key={item.id}>
                    <img src={item.img_url} alt="" />
                </div>
            ))}
        </div>
        <div className='swiper-pagination'></div>
    </div>
    </div>
    </div>
    </div>
  })
}
    {/* 无忧退货 */}
<div className="goodsWy">
  <ul>
    <li><Icon type="star" className="ic"/>30天无忧退货</li>
    <li><Icon type="star" className="ic"/>48小时快速退款</li>
    <li><Icon type="star" className="ic"/>满88元免邮费</li>
  </ul>
  </div>
  {/* 介绍价钱规格啥的 */}
{
  this.props.home && this.props.home.infodata.map(item => {
    return <div key={item.id} className="goodsSection">
        <span>{item.name}</span>
        <p>{item.goods_brief}</p>
        <b>￥{item.retail_price}</b>
        <h5>x<i>{item.extra_price}</i>  选择规格<Icon type="right" /></h5>
    </div>
  })
}
  {/* 评价 */}
<div className="evaluate">  
{
  this.props.home && this.props.home.commentdata.map(item => {
    return <div key={item.count} className="pja">
      <div className="pj">
      <b>评价{item.count}</b>
      <span>查看全部<Icon type="right" /></span>
      </div>
      <div className="pjNr">
        {/* <p>{item.data}</p> */}
      </div>
     
    </div>
  })
}
</div>
  {/* 商品参数 */}
  <div className="commodity">
    <b>--商品参数--</b>
    {
  this.props.home && this.props.home.attributedata.map((item,index) => {
    return <div key={index} className="goodscs">
<p>{item.value}</p>
    </div>
  })
}
  </div>
  {/* 图片展示 */}
  </div>
)
}
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,//这里是自动轮播
      autoplay: {
          delay: 1000,
          disableOnInteraction: false
      },
      pagination: {
          el: '.swiper-pagination',//这里是分页器设置
          type: "bullets"
      },
      observer: true,
      observerParents: true
  });
    const id = this.props.history.location.pathname.substr(7)
    // console.log(this.props.home.getdetailData(id))
    this.props.home.getdetailData(id)
  }
}
export default (withRouter(Good))
