import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import router from '../router/router';
import { Icon } from 'antd';
class Footer extends Component {
    render() {
        return (
            <ol className="footer">
                {
					router.map((item,index)=>{
						return <li>
						   <NavLink to={item.path}>
						       <span><Icon type={item.icon}/></span>
							   <span>{item.name}</span>
						   </NavLink>
						</li>
					})
				}
            </ol>
        )
    }
}
export default Footer
