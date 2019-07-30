import React, { Component } from 'react';
import '../sass/public.scss'
class Good extends Component {
    render() {
			let {title}=this.props;
        return (
           <div className="goodsAttribute">
           ———— {title} ————
           </div>
        )
    }
}
export default Good