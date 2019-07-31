import React, { Component } from 'react';
import Nav from '../component/nav';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect,withRouter } from "react-router-dom";
import {inject, observer} from 'mobx-react';
import '../sass/collect.scss';
@inject('fication')
@observer
class Collect extends Component {
    render() {
<<<<<<< HEAD
			let typeId=this.props.location.pathname.substr(9)
	    this.props.fication.lists({typeId:typeId})
=======
>>>>>>> houfaxing

       console.log(this.props)
        return (
            <div className="wrap">
            	<Nav title="easyLikeGoods"/>
				<div className="collect">
				{
					 this.props.fication.listList.map((item,index)=>{
						   return  <ul key={item.id}>
									<li>
									 <img src={item.list_pic_url}/>
								</li>
								<li>
									 <span>{item.name}</span>
									 <span>{item.goods_brief}</span>
									 <span>￥{item.retail_price}</span>
								</li>
						 </ul>
					 })

				}
				
				  
				</div>
            </div>
        )
    }

	
}
export default (withRouter(Collect))
