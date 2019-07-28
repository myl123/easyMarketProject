import request from '../utils/request';

//获取首页数据
export function homeData(){
  return request({
      url:'/',
      method:"get"
  })
}

//获取详情数据
export function detailData(){
  return request({
      url:'/goods/detail',
      method:"get"
  })
}