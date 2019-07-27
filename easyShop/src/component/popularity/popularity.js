import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import "./index.scss"
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class Popularity extends Component {
    componentDidMount() {

        this.props.home.gethomeData()

    }
    render() {
        // console.log(this.props.home)
        return (
            <div className="popularity-top">
                {
                    this.props.home && this.props.home.hotGoodsListdata.map(item => (
                        //  console.log(item)
                        <div className="popularity-content" key={item.id}>
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

        )
    }
}
export default Popularity
