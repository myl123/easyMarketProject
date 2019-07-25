import { observable, action } from "mobx";
import {fica,ficaImg} from '../../servies/fication'
 class Fication{
    // @action 修饰方法
	@observable data=[]
	@observable currId=[]
    @action getData(){
       fica().then((res)=>{
		    this.data=res.data.categoryList
	   })
    }
		@action current(id){
			ficaImg(id).then((res)=>{
       this.currId=res.data.currentCategory;
		})
		}
}
export default Fication