import React, { Component } from 'react'
 class Ficat extends Component {
	 render() {
		let {fication,currentId,id,goods}=this.props
    console.log(goods)
        return (
			<>
			   <span>
			     {
						 <>
						 {/*渲染图片和下面标题*/}
						    <img src={currentId.banner_url}/>
						    <em>{currentId.front_name}</em>
						 </>
					 }
			   </span>
				
			   <p>- {currentId.name}分类 -</p>
			      <ol className="subCategory">
				     <li>
						 {
							 goods.map((item,index)=>{
								 
							 })
						 }
					    <span>
					       <img src="http://img0.imgtn.bdimg.com/it/u=1022109268,3759531978&fm=26&gp=0.jpg"/>
					    </span>
						<span>布衣</span>
					 </li>
					 <li>
						 <span>
							<img src="http://img0.imgtn.bdimg.com/it/u=1022109268,3759531978&fm=26&gp=0.jpg"/>
						 </span>
						 <span>布衣</span>
					 </li>
				  </ol>
			   
			 </>
        )
    }
		
}
export default Ficat
