import request from '../utils/request';

//获取已经分配教室的班级
export function fica(){
  return request({
      url:'/',
      method:"GET"
  })
}