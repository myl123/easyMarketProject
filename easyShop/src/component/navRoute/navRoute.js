import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import "./index.scss"
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
@inject('home')
@observer
// import "../sass/footer/footer.scss"
class Footer extends Component {
    componentDidMount() {

        this.props.home.gethomeData()

    }
    render() {
<<<<<<< HEAD
        // console.log(this.props.home)
        return (
            <ul className="navTo">
                {
                    this.props.home && this.props.home.channeldata.map(item => (
=======
        return (
            <ul className="navTo">
			{
			}
                {
                   this.props.home && this.props.home.channeldata.map(item => (
>>>>>>> dev
                        <li key={item.id}>
                            <NavLink to={item.url} key={item.id}>
                                <dl>
                                    <dt><img src={item.icon_url} alt="" className="iconStyle" /></dt>
                                    <dd>{item.name}</dd>
                                </dl>
                            </NavLink>
                        </li>

                    ))
                }

            </ul>
        )
    }
}
export default Footer
