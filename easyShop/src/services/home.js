import request from '../utils/request';

//获取首页数据
export function homeData(){
  return request({
      url:'/',
      method:"get"
  })
}