import React, { Component } from 'react'
import Footer from '../component/footer';
import Nav from '../component/nav';
import {inject, observer} from 'mobx-react';
import '../sass/goods.scss'
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
@inject('fication')
@observer
class Goods extends Component {
    render() {
		let {name}=this.props.location.state;
		let {id}=this.props.location.id||[]
		console.log(this.props)
		return (
            <div className="wrap">
            	<Nav title={name}/>
				<div className="am-carousel">
				   <div className="slider-frame">
				      
				   </div>
				   <ul>
				   	<li>
				   		<span>★</span>
				   		<span>30天无忧退货</span>
				   	</li>
				   	<li>
				   		<span>★</span>
				   		<span>48小时快速退款</span>
				   	</li>
				   	<li>
				   		<span>★</span>
				   		<span>满88元免邮费</span>
				   	</li>
				   </ul>
				</div>
            </div> 
        )
    }
	componentDidMount(){
		let {id}=this.props.location.id||[];
		this.props.fication.detas(id)
	}
}
export default (withRouter(Goods))