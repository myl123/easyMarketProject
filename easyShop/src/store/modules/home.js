import { observable, action } from "mobx";
import {homeData,detailData} from "../../services/homes"

export default class Home{
    // @action 修饰方法
    @observable bannerdata=[] 
    @observable channeldata=[]
    @observable brandListdata=[]
    @observable newGoodsListdata=[]
    @observable hotGoodsListdata=[]
    @observable topicListdata=[]
    @observable categoryListdata=[]

    @observable detailDatadata=[]

    @action gethomeData(){
        homeData().then((res)=>{
        console.log(res.data)
        this.bannerdata=res.data.banner
        this.channeldata=res.data.channel
        this.brandListdata=res.data.brandList
        this.newGoodsListdata=res.data.newGoodsList
        this.hotGoodsListdata=res.data.hotGoodsList
        this.topicListdata=res.data.topicList
        this.categoryListdata=res.data.categoryList
	   })
    }

    @action getdetailData(id){
        detailData(id).then((res)=>{
            this.detailDatadata=res.data
        })
    }
    
}