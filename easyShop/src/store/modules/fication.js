import { observable, action } from "mobx";
<<<<<<< HEAD
import {fica,ficaImg,details,search,keyword,category,categoryId,relatedId,goodscount,addordelete,list,shop,shopping,add,deletes,upCount,upChecked,updata} from '../../servies/fication';
=======
import {fica,ficaImg,details,search,keyword,category,categoryId,relatedId,goodscount,addordelete,list,shop,shopping,add} from '../../servies/fication';
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3
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
	@observable addList=[]
<<<<<<< HEAD
	@observable deletList=[]
	@observable deletCount=[]
	@observable upCheckedsList=[]
	@observable upCheckedsListNum=[]
	@observable upCheckedsListGetId=[]
=======
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3
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
			 if(deta===undefined){
				  return
			 }
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
			console.log(deta,'deta')
			this.categoList=deta.data
		}
		//点击分类下的数据跳转页面
		@action async relate(parmas){
			let deta=await relatedId(parmas)
			if(deta===undefined){
				 return 
			}else{
				 this.categoLists=deta.data
			}
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
			this.shopList=deta.data
		}
		// 点击购物车跳转购物车
		@action async shoppings(){
			let deta=await shopping()
			
			this.shoppingList=deta.data.cartList
		}
		@action async adds(params){
			let deta=await add(params)
			console.log(deta,'data')
			// this.addList=deta.dataconsole.log(
		}
		//删除选择商品
		@action async deletest(params){
			let deta=await deletes(params)
        if(deta.errno === 0){
            this.deletList = deta.data.cartList
        }
		}
<<<<<<< HEAD
		//更新商品数量
    @action async up_Count(params){
        let deta = await upCount(params)
				console.log(deta)
        this.shoppingList = deta.data.cartList
		}
		//编辑单选
    @action async updata(params){
        let item = this.shoppingList.find((item) => item.product_id === params)
        item.isShow = !item.isShow
        this.IsShow = this.shoppingList.every(item => item.isShow)
        this.edit_All = this.shoppingList.filter((item) => item.isShow)
    }
		  //购物车商品是否选中
    @action async upCheckeds(params){
        let deta = await upChecked(params)
        this.shoppingList=deta.data.cartList
				this.upCheckedsListNum=deta.data.cartTotal
    }
		
=======
		// @action async adds(){
		// 	let deta=await add()
		// 	this.addList=deta.data
		// }
>>>>>>> 95ca43acb59eb4be7de8cf5a8348f744e3cb5fb3
}
export default Fication