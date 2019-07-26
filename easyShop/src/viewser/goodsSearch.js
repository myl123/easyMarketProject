import React, { Component } from 'react'
import Footer from '../component/footer';
import '../sass/goodsSearch.scss';
import { Icon } from 'antd';
class GoodsSearch extends Component {
    render() {
        return (
            <div className="noTabPageContent">
            	<ul className="searchInputWrap">
				    <li>&lt;</li>
					<li><Icon type="search" /><input type="text" placeholder="520元礼包抢先领"/></li>
					<li>取消</li>
				</ul>
				<div className="searchMsg">
				   <div className="searchItemWrap">
				       <ul className="title">
					      <li>历史纪录</li>
						  <li><Icon type="delete" /></li>
					   </ul>
					   <ol className="listWrap">
					      <li>历史纪录</li>
						  <li>历史纪录</li>
						  <li>历史纪录</li>
					   </ol>
				   </div>
				   <div className="searchItemwrap">
				      <p className="title">热门搜索</p>
					  <div className="listWrap">
					     <button class="listItem">520元礼包抢先领</button>
						 <button class="listItem">夏ss</button>
						 <button class="listItem">单鞋</button>
						 <button class="listItem">夏凉被</button>
						 <button class="listItem">墨镜</button>
					  </div>
				   </div>
				</div>
            </div>
        )
    }
}
export default GoodsSearch
