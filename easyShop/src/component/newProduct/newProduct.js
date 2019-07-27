import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import "./index.scss"
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class NewProduct extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.home.gethomeData()
        
    }
    render() {
        // console.log(this.props.home)
        return (
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
       
        )
    }
}
export default NewProduct
