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

