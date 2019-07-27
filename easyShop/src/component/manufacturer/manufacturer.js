import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import "./index.scss"
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class Manufacturer extends Component {
    componentDidMount() {
        this.props.home.gethomeData()
    }
    render() {
        // console.log(this.props.home)
        return (
            <div className="brandManu">
            {
               this.props.home && this.props.home.brandListdata.map(item => (
                    // console.log(item)
                    <NavLink className="brandMenu" key={item.id} to={`/brandDetail/${item.id}`}>
                        <img src={item.new_pic_url} alt="" />
                    </NavLink>
                ))

            }
        </div>
        )
    }
}
export default Manufacturer
