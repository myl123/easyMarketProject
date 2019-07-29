import request from '../utils/request';

//获取首页数据
export function homeData(){
  return request({
      url:'/',
      method:"get"
  })
}

//获取详情数据
export function detailData(params){
  return request({
      url:`/goods/detail?id=${params}`,
      method:"get"
  })
}

//获取专题数据
export function topicData(params){
  return request({
      url:`/topic/list?id=${params}&page=1&size=1000`,
      method:"get"
  })
}

//获取留言数据 
export function messageData(params){
  return request({
      url:`/comment/list?valueId=${params}&typeid=1`,
      method:"post"
  })
}