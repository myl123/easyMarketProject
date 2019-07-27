import React, { Component } from 'react';
import '../sass/public.scss'
class Nav extends Component {
    render() {
		let {title}=this.props;
        return (
            <ul className="public_header">
            	 <li>&lt;</li>
				 <li>{title}</li>
				 <li></li>
            </ul>
        )
    }
}
export default  Nav
