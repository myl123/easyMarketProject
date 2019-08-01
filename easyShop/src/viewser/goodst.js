import React, { Component } from 'react'
import Footer from '../component/footer';
import Nav from '../component/nav';
import Returns from '../component/returns'
import { inject, observer } from 'mobx-react';
import * as Swiper from 'swiper/dist/js/swiper.js';
import "swiper/dist/css/swiper.min.css"
import '../sass/goods.scss';
import 'antd/dist/antd.css';
import Good from '../component/good'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect, withRouter } from "react-router-dom";
import { Drawer, Button, Icon } from 'antd';
import { Rate } from 'antd';
@inject('fication')
@observer
class Goodst extends Component {
	state = { visible: false, childrenDrawer: false };
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

<<<<<<< HEAD
  onClose = () => {
    this.props.fication.goodscounts()
	this.props.fication.shops()
	this.props.fication.shoppings()
  };
=======
	onClose = () => {
		this.props.fication.goodscounts()
		this.props.fication.shops()
	};
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3

	showChildrenDrawer = () => {
		this.setState({
			childrenDrawer: true,
		});
	};

<<<<<<< HEAD
  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };
	state={
		cont:0,
		bool:true,
		ction:false,
		number:null
	}
    render() {
	  let {issue}=this.props.fication && this.props.fication.detailsList;
		let {name}=this.props.location && this.props.location.state;
		let {id}=this.props.location.id!=undefined&& this.props.location.id;
		let {retail}=this.props.location.retail!=undefined && this.props.location.retail
		let {cont,bool,ction,number}=this.state;
		let {goods_brief,retail_price}=this.props.fication.detailsList.length!=0&&this.props.fication.detailsList.info
=======
	onChildrenDrawerClose = () => {
		this.setState({
			childrenDrawer: false,
		});
	};
	state = {
		cont: 0,
		bool: true,
		ction: false
	}
	render() {
		let { issue } = this.props.fication.detailsList
		let { name } = this.props.location.state;
		let { id } = this.props.location.id || [];
		let { cont, bool, ction } = this.state;
		let { goods_brief, retail_price } = this.props.fication.detailsList.length != 0 && this.props.fication.detailsList.info
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3

		return (
			<div className="wrap">
				<Nav title={name} />
				<div className="am-carousel">
					<div className="slider-frame">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide" >
									<img src="http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg" alt="" />
								</div>
								<div className="swiper-slide" >
									<img src="http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg" alt="" />
								</div>
							</div>
							<div className='swiper-pagination'></div>
						</div>
					</div>
					<Returns />
					<div className="goodsMsgWrap">
						<ul>
							<li>{name}</li>
							<li>{goods_brief}</li>
							<li>{retail_price}</li>
							<li>
								<span>× {this.state.cont}</span>
								<span onClick={this.showDrawer}>选择规格 <em>&gt;</em></span>
								<Drawer
									width={520}
									closable={false}
									onClose={this.onClose}
									visible={this.state.visible}
								>


									<div
										style={{
											bottom: 0,
											width: '100%',
						
											textAlign: 'right',
											background: '#fff',
										}}
									>
										<div className="goodsSizeDo">
										<img src="http://img3.imgtn.bdimg.com/it/u=2870322368,453611869&fm=26&gp=0.jpg" className="imgs" alt=""/>
											<ol className="goodsSizeSetMsg">
												
												<li>
													<span>单价</span>
													<span>￥ 69</span>
													<em onClick={() => {
														this.setState({
															visible: false,
														});
													}}>×</em>
												</li>
												<li>
													<span>库存</span>
													<span>100件</span>
												</li>
												<li>
													<span>已选择:</span>
												</li>
												<li>
													<span>数量</span>
													<div className="input">
														<em onClick={() => {
															this.add('add', this.state.cont + 1)
														}}>+</em>
														<input type="text" value={this.state.cont} ref="input" />
														<em onClick={() => {
															this.add('rem', (this.state.cont - 1))
														}}>-</em>
													</div>
												</li>
											</ol>
										</div>

										<Button
											style={{
												marginRight: 8,
											}}
											onClick={this.onClose}
										>
											加入购物车
            </Button>
										<Button onClick={this.onClose} type="primary">
											立即下单
            </Button>
									</div>
								</Drawer>
							</li>
						</ul>
					</div>
					<Good title="商品参数" />
					<div className="goodsAttribute">
						<Good title="常见问题" />
						<div className="problem">
							{
								issue && issue.map((item, index) => {
									return <ul key={index}>
										<li>
											<span>√</span>
											<span>{item.question}</span>
										</li>
										<li>{item.answer}</li>
									</ul>
								})
							}
						</div>
					</div>
					<Good title="大家都在看" />
					<div className="categorydetil">
						{
							this.props.fication.categoList.goodsList && this.props.fication.categoList.goodsList.map((item, index) => {
								return <ol key={index}>
									<li><img src={item.list_pic_url} /></li>
									<li>{item.name}</li>
									<li>{item.retail_price}</li>
								</ol>
							})
						}
					</div>
				</div>
				<ol className="foot">
					<li onClick={() => {
						this.setState({
							bool: !bool
						})
						this.collection(bool, id, ction)
					}} style={{
						color: bool === true ? 'yellow' : '#000'
					}}>
						☆
					 </li>
<<<<<<< HEAD
					 <li onClick={()=>{
						 {/*点击购物车跳转页面*/}
						 this.setState({
							  number:this.state.cont
						 })

						 let cont=this.state.cont;
						 this.props.fication.detailsList.productList&&this.props.fication.detailsList.productList.map((item)=>{
						 	this.props.history.push({ pathname:'/shop',state:{goodsId : id },number:{number:cont},productId:{productId:item.id}})

						 })
						
					 }}><Icon type="shopping-cart" /><em>{this.state.cont}</em></li>
					 <li>
					    <button onClick={this.showDrawer}>加入购物车</button>
							<Drawer
																	width={520}
																	closable={false}
																	onClose={this.onClose}
																	visible={this.state.visible}
							                  >
							                
							
							          <div
							            style={{
							              bottom: 0,
							              width: '100%',
							              padding: '10px 0',
							              textAlign: 'right',
							              background: '#fff',
							            }}
							          >
												   <div className="goodsSizeDo">
													    <ol className="goodsSizeSetMsg">
															   <li>
																    <span>单价</span>
																		<span>￥ 69</span>
																		<em onClick={()=>{
																			this.setState({
																				visible: false,
																			});
																		}}>×</em>
																 </li>
																 <li>
																		<span>库存</span>
																		<span>100件</span>
																 </li>
																 <li>
																	 <span>已选择:</span>
																 </li>
																 <li>
																     <span>数量</span>
																		 <div className="input">
																		   <em onClick={()=>{
																				  this.add('add',this.state.cont+1)
																			 }}>+</em>
																			 <input type="text" value={this.state.cont} ref="input"/>
																			 <em onClick={()=>{
																				  this.add('rem',(this.state.cont-1))
																			 }}>-</em>
																		 </div>
																 </li>
															</ol>
													 </div>
							
							            <Button
							              style={{
							                marginRight: 8,
							              }}
							              onClick={this.onClose}
							            >
							              加入购物车
							            </Button>
							            <Button onClick={this.onClose} type="primary">
							              立即下单
							            </Button>
							          </div>
							        </Drawer>
							<button>立即购买</button>
          </li>
				</ol>
      </div> 
        )
    }
	componentDidMount(){
		let {id}=this.props.location.id||[];
		let {retail}=this.props.location.retail||[];
		this.props.fication.detas(id)//标题e
		this.props.fication.relate(id)//大家看底下内容
		var mySwiper = new Swiper('.swiper-container', {
				loop: true,//这里是自动轮播
				autoplay: {
					delay: 1000,
					disableOnInteraction: false
				},
				pagination: {
						el: '.swiper-pagination',//这里是分页器设置
						type:"bullets"
				},
				observer:true,
				observerParents:true
=======
					<li onClick={() => {
						{/*点击购物车跳转页面*/ }
						this.props.history.push(`/shop/${this.state.cont}`)
					}}><Icon type="shopping-cart" /><em>{this.state.cont}</em></li>
					<li>
						<button>加入购物车</button>
						<button>立即购买</button>
					</li>
				</ol>
			</div>
		)
	}
	componentDidMount() {
		let { id } = this.props.location.id || [];
		this.props.fication.detas(id)//标题e
		this.props.fication.relate(id)//大家看底下内容
		var mySwiper = new Swiper('.swiper-container', {
			loop: true,//这里是自动轮播
			autoplay: {
				delay: 1000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',//这里是分页器设置
				type: "bullets"
			},
			observer: true,
			observerParents: true
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3
		});
	}
	add(type, num) {//加
		if (type === 'add') {
			this.setState({
				cont: num
			})
		} else if (type === 'rem') {//减
			if (num <= 0) {
				return
			}
			this.setState({
				cont: num
			})

		}
	}
	//收藏
	collection(bool, id, ction) {
		if (bool === false) {
			this.setState({
				ction: bool,
				ction: 0
			})

		} else {
			this.setState({
				ction: bool,
				ction: 1
			})
		}
		//本地储存
		let typeId = JSON.parse(localStorage.getItem('typeId')) || [];
		typeId.push(ction)
		// localStorage.setItem('typeId',JSON.stringify(typeId))
		if (ction === true || ction === false) {
			return
		} else {
			this.props.fication.addordeletes({ typeId: ction, valueId: id })
			this.props.fication.lists({ typeId: ction })

		}
	}
}
export default (withRouter(Goodst))