import React, { Component } from 'react';
import "./index.scss"
import Swiper from "swiper/dist/js/swiper.js"
import { inject, observer } from 'mobx-react';
import "swiper/dist/css/swiper.min.css"
import {NavLink} from "react-router-dom"
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class Special extends Component {
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,//这里是自动轮播
            autoplay: {
                delay: 1000,
                disableOnInteraction: false
            },
            observer: true,
            observerParents: true
        });
        this.props.home.gethomeData()

    }
    render() {
        // console.log(this.props.home)
        return (
            <div className="special-top">
                    <div className="specialTops">
                        {
                            this.props.home && this.props.home.topicListdata.map(item => (
                                //  console.log(item)
                                <NavLink to={`/topicDetail/${item.id}`} className="special-content" key={item.id}>
                                    <img src={item.item_pic_url} alt="" />
                                    <div className="wz">
                                        <h6>{item.title}</h6>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </NavLink>

                            ))
                        }
                    </div>
            </div>

        )
    }
}
export default Special
