import { observable, action } from "mobx";
import {fica,ficaImg,details,search,keyword,category,categoryId,relatedId,goodscount,addordelete,list,shop,shopping} from '../../servies/fication';
 class Fication{
    // @action 修饰方法
	@observable data=[]
	@observable currId=[]
	@observable detailsId=[]
	@observable searchs=[]
	@observable vague=[]
	@observable gory=[]
	@observable categoList=[]
	@observable categoLists=[]
	@observable related=[]
	@observable detailsList=[]
	@observable goodscountList=[]
	@observable addordeleteList=[]
	@observable listList=[]
	@observable shopList=[]
	@observable shoppingList=[]
    @action async getData(){
			let deta=await fica();
      this.data=deta.data.categoryList
    }
		@action async current(id){
			  let deta= await ficaImg(id)
				this.currId=deta.data.currentCategory;
		}
		//详情
		@action async detas(id){
		   let deta=await details(id)
			 this.detailsList=deta.data
		}
		//热搜
		@action async sear(){
			let deta=await search()
			this.searchs=deta.data

		}
		//模糊搜索
		@action async keywordVal(parmas){
			let deta=await keyword(parmas)
			this.vague=deta.data
		}
		//分类下的内容
		@action async goodsCat(parmas){
				category(parmas).then((res)=>{
					this.gory=res.data
			})
		}
		@action async catego(parmas){
			let deta=await categoryId(parmas)
			this.categoList=deta.data
		}
		//点击分类下的数据跳转页面
		@action async relate(parmas){
			let deta=await relatedId(parmas)
			this.categoLists=deta.data
		}
		//点击加入购物车
		@action async goodscounts(){
			let deta=await goodscount()
			this.goodscountList=deta.data
		}
		//收藏(没写)
		@action async addordeletes(params){
			let deta=await addordelete(params)
			this.addordeleteList=deta.data
		}
		//我的页面获取到typeId
		@action async lists(params){
			let deta=await list(params)
			this.listList=deta.data
		}
		//加减点击购物车
		@action async shops(){
			let deta=await shop()
			console.log(deta)
			this.shopList=deta.data
		}
		// 点击购物车跳转购物车
		@action async shoppings(){
			let deta=await shopping()
			this.shoppingList=deta.data
		}
}
export default Fication