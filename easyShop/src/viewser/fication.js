import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import Footer from '../component/footer';
import {inject, observer} from 'mobx-react';
import '../sass/fication.scss';
import router from '../router/router';
import Ficat from '../component/ficat';
@inject('fication')
@observer
class Fication extends Component {
    render() {
			let {history}=this.props;
        return (
             <div className="wrap">
								<div className="header">
									<div className="searchWrap">
										<div className="searchInput" onClick={()=>{
													  history.push(`/goodsSearch`)
												}}>
												<span>搜索商品，共239款好物</span>
										</div>
									</div>
									<div className="tabPageContent">
											<ul className="tabsWrap">
											  {
													this.props.fication&&this.props.fication.data.map(item=>{
														return <li key={item.id}>{item.name}</li>
													})
												}
											</ul>
											<div className="categogContet">
											   <Ficat fication={this.props.fication}/>
											</div>
									</div>
								</div>
							 <Footer/>
					   </div>
				)
    }
		componentDidMount(){
			this.props.fication.getData()
		}
}
export default (withRouter(Fication))
