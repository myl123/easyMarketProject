import React, { Component } from 'react';
import BScroll from 'better-scroll';
 class Ficat extends Component {
	 render() {
		let {fication,currentId,id,goods}=this.props
    console.log(goods)
        return (
			<>
			   <span>
			     { <>
						 {/*渲染图片和下面标题*/}
						    <img src={currentId.banner_url}/>
						    <em>{currentId.front_name}</em>
						 </>
					 }
			   </span>
				
			   <p>- {currentId.name}分类 -</p>
			      <ol className="subCategory">
						  {
						  	goods&&goods.map((item,index)=>{
						  		return <li>
						  				<span><img src={item.list_pic_url}/></span>
											<span>{item.name}</span>
						  		</li>
						  	})
						  }
					</ol>
			   
			 </>
        )
    }
		
}
export default Ficat
