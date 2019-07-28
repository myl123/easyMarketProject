import { observable, action } from "mobx";
import {fica,ficaImg,details,search,keyword,category,categoryId} from '../../servies/fication';
 class Fication{
    // @action 修饰方法
	@observable data=[]
	@observable currId=[]
	@observable detailsId=[]
	@observable searchs=[]
	@observable vague=[]
	@observable gory=[]
	@observable categoList=[]
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
		//详情
		@action detas(id){
				details(id).then((res)=>{
			    console.log(res.data)
			})
		}
		//热搜
		@action sear(){
				search().then((res)=>{
					 this.searchs=res.data
			})
		}
		//模糊搜索
		@action keywordVal(parmas){
				keyword(parmas).then((res)=>{
					this.vague=res.data
			})
		}
		//分类下的内容
		@action goodsCat(parmas){
				category(parmas).then((res)=>{
					this.gory=res.data
			})
		}
		@action catego(parmas){
				categoryId(parmas).then((res)=>{
					this.categoList=res.data
			})
		}
}
export default Fication