import React, { Component } from 'react';
import Nav from '../component/nav';
import {inject, observer} from 'mobx-react';
import '../sass/collect.scss';
@inject('fication')
@observer
class Collect extends Component {
    render() {
		console.log(this.props.fication)

        return (
            <div className="wrap">
            	<Nav title="easyLikeGoods"/>
				<div className="collect">
				   <ul>
				      <li>
					     <img src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"/>
					  </li>
					  <li>
					     <span>日式和风懒人沙发</span>
						 <span>优质莱卡纯棉，和风家居新体验</span>
						 <span>￥599</span>
					  </li>
				   </ul>
				</div>
            </div>
        )
    }
}
export default  Collect
