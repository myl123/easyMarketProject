import React, { Component } from 'react';
import Nav from '../component/nav';
import {inject, observer} from 'mobx-react';
import '../sass/collect.scss';
@inject('fication')
@observer
class Collect extends Component {
    render() {

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
export default  Collect
