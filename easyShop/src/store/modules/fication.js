import { observable, action } from "mobx";
import {fica} from '../../servies/fication'
 class Fication{
    // @action 修饰方法
	@observable data=[]
    @action getData(){
       fica().then((res)=>{
		   console.log(res.data.categoryList)
		    this.data=res.data.categoryList
	   })
    }
}
export default Fication