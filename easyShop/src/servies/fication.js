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
export function search(parmas){
  return request({
      url:'/search/helper',
      method:"GET",
  })
}
