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
export function addordelete(params){
		return request.post('/api/collect/addordelete',params)
}
//我的页面获取到typeId//获取不到
export function list(params){
	console.log(params,'params')
  return request({
      url:`/api/collect/list?typeId=${params.typeId}&size=1000`,
      method:"GET",
  })
}
//加减点击购物车
export function shop(){
		return request.post('/api/cart/goodscount')
}
// 点击购物车跳转购物车
export function shopping(){
  return request({
      url:'/cart/index',
      method:"GET",
  })
}
// 点击购物车跳转购物车
export function add(params){
		return request.post('/cart/add',params)
}
//删除选择商品
export function deletes(params){
		return request.post('/cart/delete',params)
}
//更新商品数量
export function upCount(params) {
  return request.post('/cart/update',params);
}

//判断商品是否选中
export function upChecked(params) {
  return request.post('/cart/checked',params);
}