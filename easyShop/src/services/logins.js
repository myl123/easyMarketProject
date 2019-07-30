import request from '../utils/request';

//获取首页数据

export function loginData(params){
  if(params.mobile==='15323807318'&&params.password==='123456'){
     return request.post('/auth/loginByMobile',params)
  }
 
}

