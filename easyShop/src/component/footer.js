import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,NavLink,Redirect } from "react-router-dom";
import router from '../router/router';
import { Icon } from 'antd';
<<<<<<< HEAD
import "../sass/footer/footer.scss"
=======
>>>>>>> dev
class Footer extends Component {
    render() {
        return (
            <ol className="footer">
<<<<<<< HEAD
                {
					router.map((item,index)=>{
						return item.name&&<li key={index}>
						   <NavLink to={item.path} key={index}>
						       <span><Icon type={item.icon} className="iconStyle"/></span>
							   <span className="foot">{item.name}</span>
						   </NavLink>
						</li>
					})
=======
				 {
						router.map((item,index)=>{
							 return item.name&&<li key={index}>
								 <NavLink to={item.path}>
										 <span><Icon type={item.icon}/></span>
									 <span>{item.name}</span>
								 </NavLink>
							</li>
						})
>>>>>>> dev
				}
            </ol>
        )
    }
}
export default Footer
