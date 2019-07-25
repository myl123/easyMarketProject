import React, { Component } from 'react'
import Footer from '../component/footer'
import Swiper from "swiper/dist/js/swiper.js"
import { inject, observer } from 'mobx-react';
import "swiper/dist/css/swiper.min.css"
import "../sass/home.scss"
import { Link } from 'react-router-dom'
import NavTo from "../component/navRoute.js"
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
                                {
                                    this.props.home && this.props.home.bannerdata.map(item => (
                                        <div className="swiper-slide" key={item.id}>
                                            <img src={item.image_url} alt="" />
                                        </div>
                                    ))

                                }
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </div>
                    {/* swier下的框 */}
                    <div className="content">
                        <NavTo />
                    </div>
                    {/* 品牌制造商 */}
                    <div className="brand">
                        <p>品牌制造商直销</p>
                        <div className="brandManu">
                            {
                                this.props.home && this.props.home.brandListdata.map(item => (
                                    // console.log(item)
                                    <div className="brandMenu" key={item.id}>
                                        <img src={item.new_pic_url} alt="" />
                                         {/* <span>{item.name}</span> */}
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                    {/* 新品首发 */}
                    <div className="newProduct">
                        <p>新品首发</p>
                        <div className="newProduct-top">
                            {
                                this.props.home && this.props.home.newGoodsListdata.map(item => (
                                    // console.log(item)
                                    <dl key={item.id}>
                                        <dt><img src={item.list_pic_url} alt="" /></dt>
                                        <dd>
                                        <p>{item.name}</p>
                                        <p className="productPrice">￥{item.retail_price}</p>
                                        </dd>
                                    </dl>
                                ))
                            }
                        </div>
                    </div>
                    {/* 人气推荐 */}
                    <div className="popularity">
                        <p>人气推荐</p>
                        <div className="popularity-top">
                        {
                                this.props.home && this.props.home.hotGoodsListdata.map(item => (
                                    //  console.log(item)
                                     <div className="popularity-content">
                                         <div className="popularity-left">
                                        <span>
                                        <img src={item.list_pic_url} alt="" />
                                        </span>
                                         </div>
                                         <div className="popularity-right">
                                             <p className="popularityOne">{item.name}</p>
                                             <p className="popularityTwo">{item.goods_brief}</p>
                                             <p className="popularityThree">￥{item.retail_price}</p>
                                         </div>
                                     </div>
                                   
                                ))
                            }
                        </div>
                    </div>
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
            }
        });
        this.props.home.gethomeData()

    }
}
export default Home
