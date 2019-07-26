import React, { Component } from 'react';
import BScroll from 'better-scroll';
 class Ficat extends Component {
	 render() {
		let {fication,currentId,id,goods}=this.props
    console.log(fication)
        return (
					<>
						 <span>
						 {/*渲染图片和下面标题*/}
						 {
							 console.log(currentId.banner_url)
						 }
							 { <>
								    <img src={currentId.banner_url}/>
										<em>{currentId.front_name}</em>
								 </>
							 }
						 </span>
						 {/* 分类*/}
						 {this.tail(fication,currentId)}
						 <ol className="subCategory">
								{
									this.goodFication(goods,fication)
								}
						 </ol>
					</>
        )
    }
		//分类
		tail(fication,currentId){
				return fication.map((item,index)=>{
					console.log(item)
					 if(item.id===1005000){
							 if(currentId.name){
								 return <p key={index}>-  {currentId.name}分类 -</p>
							 }else{
								  return <p key={index}>-  {item.name}分类 -</p>
							 }
					 }
				})
		}
	 //分类下面的
	 goodFication(goods,fication){
		  if(goods){
				 return goods.map((item,index)=>{
						return <li>
								<span><img src={item.list_pic_url}/></span>
								<span>{item.name}</span>
						</li>
					})
			}else{
				 return fication.map((item,index)=>{
				 	if(item.id===1005000){
				 			return item.goodsList.map((ite,ind)=>{
								 return <li>
								 		<span><img src={ite.list_pic_url}/></span>
								 		<span>{item.name}</span>
								 </li>
							})
				  	}
				 })
			}
	 }
	
}
export default Ficat
