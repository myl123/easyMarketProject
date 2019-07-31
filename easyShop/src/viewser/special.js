import React, { Component } from 'react'
import Footer from '../component/footer'
import { inject, observer } from 'mobx-react';
import "../sass/special.scss"
import {NavLink} from "react-router-dom"
@inject('home')
@observer
class Special extends Component {
render() {
    console.log(this.props.home)
return (
<div className="wrap">
    <div className="header">
        {
        this.props.home && this.props.home.topicdata.map(item => {
            return <NavLink key={item.id} to={`/topicDetail/${item.id}`}>
            <div className="topic">
                <img src={item.scene_pic_url} alt="" />
                <p>{item.title}</p>
                <p className="jj">{item.subtitle}</p>
                <p className="price">￥{item.price_info}</p>
            </div>

            </NavLink>
        })
        }
    </div>
    <Footer />
</div>
)
}
componentDidMount() {
    this.props.home.topicData()

}
}
export default Special