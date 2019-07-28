import React, { Component } from 'react'
import Footer from '../component/footer';
import Nav from '../component/nav';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
class Goods extends Component {
    render() {
		return (
            <div className="wrap">
            	<Nav/>
            </div>
        )
    }
}
export default (withRouter(Goods))