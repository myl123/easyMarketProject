import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import router from '../router/router';
import { Icon } from 'antd';
import "../sass/footer/footer.scss"
class Footer extends Component {
    render() {
        return (
				{/*底部*/}
            <ol className="footer">
                {
					router.map((item,index)=>{
						return item.name&&<li key={index}>
						   <NavLink to={item.path} key={index}>
						       <span><Icon type={item.icon} className="iconStyle"/></span>
							   <span className="foot">{item.name}</span>
						   </NavLink>
						</li>
					})
				}
            </ol>
        )
    }
}
export default Footer
