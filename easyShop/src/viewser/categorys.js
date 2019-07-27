import React, { Component } from 'react';
import Footer from '../component/footer';
import {inject, observer} from 'mobx-react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import Nav from '../component/nav'
import '../sass/categorys.scss'
@inject('fication')
@observer
class Categorys extends Component {
	state={
		bool:false
	}
    render() {
		const id=this.props.location.pathname.substr(11);
		let {bool}=this.state;
        return (
            <div className="wrap">
								<Nav title="奇趣分类"/>
								<ol className="am-tabs">
								   {
								   	this.props.fication.gory.brotherCategory&&this.props.fication.gory.brotherCategory.map((item,index)=>{
											 return <li key={item.id} onClick={()=>{
												 {/*点击的时候颜色的切换*/}
												   this.addStyle(item.id,item,item.name,bool)
											 }} ref="li" style={{
												   color:item.name===bool?'#108ee9':null,
													 borderBottom:item.name===bool?'.02rem solid #108ee9':null
											 }}>{item.name}</li>
								   	})
								   }
							  </ol>
								<div className="categoryDetail">
								   <p>夏日甜心</p>
									 <p>夏日甜心</p>
								</div>
           </div>
        )
    }
	componentDidMount(){

		const id=this.props.location.pathname.substr(11);
		this.props.fication.goodsCat(id);
	}
	addStyle(id,item,name,bool){
   this.setState({
   	 bool:item.name
   })
	 console.log(item)
	}
}
export default (withRouter(Categorys))
