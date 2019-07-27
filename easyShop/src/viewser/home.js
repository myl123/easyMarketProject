import React, { Component } from 'react'
import Footer from '../component/footer'
import * as Swiper from 'swiper/dist/js/swiper.js';
import { inject, observer } from 'mobx-react';
import "swiper/dist/css/swiper.min.css"
import "../sass/home.scss"
import NavTo from "../component/navRoute/navRoute"
import Manufacturer from "../component/manufacturer/manufacturer"
import NewProduct from "../component/newProduct/newProduct"
import Popularity from "../component/popularity/popularity"
import Special from "../component/special/special"
@inject('home')
@observer
class Home extends Component {

    render() {
        // console.log(this.props.home)
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
                   
                    <div className="brands">
                        <p>品牌制造商直销</p>
                        <Manufacturer/>
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
                type:"bullets"
            },
            observer:true,
            observerParents:true
        });
        this.props.home.gethomeData()

    }
}
export default Home
