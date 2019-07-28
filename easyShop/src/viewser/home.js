import React, { Component } from 'react'
import Footer from '../component/footer'
import * as Swiper from 'swiper/dist/js/swiper.js';
import { inject, observer } from 'mobx-react';
import "swiper/dist/css/swiper.min.css"
import "../sass/home.scss"
import { Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import NavTo from "../component/navRoute/navRoute"
import Manufacturer from "../component/manufacturer/manufacturer"
import NewProduct from "../component/newProduct/newProduct"
import Popularity from "../component/popularity/popularity"
import Special from "../component/special/special"
@inject('home')
@observer
class Home extends Component {

render() {
console.log(this.props.home)
return (
<div className="wrap">
    <div className="header">
{/* swier */}
<div className="swiper">
    <div className="swiper-container">
        <div className="swiper-wrapper">
            {this.props.home && this.props.home.bannerdata.map(item => (
                <div className="swiper-slide" key={item.id}>
                    <img src={item.image_url} alt="" />
                </div>
            ))}
        </div>
        <div className='swiper-pagination'></div>
    </div>
</div>
{/* swier下的框 */}
<div className="content">
    <NavTo />
</div>
{/* 品牌制造商 */}

<div className="brands">
    <p>品牌制造商直销</p>
    <Manufacturer />
</div>
{/* 新品首发 */}
<div className="newProduct">
    <p>新品首发</p>
    <NewProduct />
</div>
{/* 人气推荐 */}
<div className="popularity">
    <p>人气推荐</p>
    <Popularity />
</div>
{/* 专题精选 */}
<div className="special">
    <p>专题精选</p>
    <Special />
</div>
{/* 居家   以下所有 */}
<div className="category">
{
    this.props.home && this.props.home.categoryListdata.map(item => (
    <div key={item.id}>
        <p key={item.id}>{item.name}</p>
        <div className="categorys">
        {
            item.goodsList.map(ite => (
                // console.log()
                <div className="cate" key={ite.id}>
                    <NavLink className="categorysMenu"
                        // key={item.id}
                        to={`/Goods/${item.id}`}
                    >
                        <img src={ite.list_pic_url} alt="" />
                        <div className="cateTop">
                            <h4>{ite.name}</h4>
                            <h5>￥{ite.retail_price}</h5>
                        </div>
                    </NavLink>
                </div>

            ))

        }
        <Link to={`/categorys/${item.id}`} className="categoryMoreGoods">
            <div className="categ">
                更多{item.name}好物<br />
                <Icon type="right-circle" className="iconstyle" />
            </div>

        </Link>
        </div>

    </div>
    ))
}


</div>
{/* 首页完成 */}
    </div>
    <Footer />
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
    this.props.home.gethomeData()

}
}
export default Home
