import request from '../utils/request';

//获取fication左侧栏数据(居家)
export function fica(){
  return request({
      url:'/',
      method:"GET"
  })
}
//获取点击之后左侧栏数据图片发生改变
export function ficaImg(params){
  return request({
      url:`/catalog/current?id=${params}`,
      method:"GET",
  })
}
//商品详情
export function details(params){
  return request({
      url:`/goods/detail?id=${params}`,
      method:"GET",
  })
}
//热搜
export function search(){
  return request({
      url:'/search/index',
      method:"GET",
  })
}
//模糊查询
export function keyword(parmas){
  return request({
      url:`/search/helper?keyword=${parmas}`,
      method:"GET",
  })
}
//分类下面的内容
export function category(parmas){
  return request({
      url:`/api/goods/category?id=${parmas}`,
      method:"GET",
  })
}
//奇趣分类下的数据
export function categoryId(parmas){
	console.log(parmas,'..pa')
  return request({
      url:`/api/goods/list?categoryId=${parmas}&page=1&size=1000`,
      method:"GET",
  })
}
//点击分类下的数据跳转页面
export function relatedId(parmas){
  return request({
      url:`/api/goods/related?id=${parmas}`,
      method:"GET",
  })
}
//购物车件数的
export function goodscount(){
  return request({
      url:'/api/cart/goodscount',
      method:"GET",
  })
}
//收藏
export function addordelete(){
  return request({
      url:'/api/collect/addordelete',
      method:"POST",
  })
}
