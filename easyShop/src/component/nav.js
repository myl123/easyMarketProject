import React, { Component } from 'react';
import '../sass/public.scss';
import { BrowserRouter as Router,withRouter } from "react-router-dom";
class Nav extends Component {
    render() {
		let {title}=this.props;
        return (
            <ul className="public_header">
            	 <li onClick={()=>{
					this.props.history.go(-1)
				 }}>&lt;</li>
				 <li>{title}</li>
				 <li></li>
            </ul>
        )
    }
}
export default  (withRouter(Nav))
