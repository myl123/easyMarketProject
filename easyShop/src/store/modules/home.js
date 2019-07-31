import { observable, action } from "mobx";
import {homeData,detailData,topicData,messageData,topicSpecialData,addMessageData} from "../../services/homes"

export default class Home{
    // @action 修饰方法
    @observable bannerdata=[] 
    @observable channeldata=[]
    @observable brandListdata=[]
    @observable newGoodsListdata=[]
    @observable hotGoodsListdata=[]
    @observable topicListdata=[]
    @observable categoryListdata=[]

    @observable gallerydata=[]
    @observable infodata=[]
    @observable commentdata=[]
    @observable attributedata=[]

    @observable topicdata=[]

    @observable messagedata=[]

    @observable estimatedata=[]

    @observable topicSpecialdata=[]

    @action async gethomeData(){
        let res=await homeData()
         console.log(res.data)
        this.bannerdata=res.data.banner
        this.channeldata=res.data.channel
        this.brandListdata=res.data.brandList
        this.newGoodsListdata=res.data.newGoodsList
        this.hotGoodsListdata=res.data.hotGoodsList
        this.topicListdata=res.data.topicList
        this.categoryListdata=res.data.categoryList
	   
    }

    @action async getdetailData(id){
        let res=await detailData(id)
            console.log(res.data)
            this.gallerydata=res.data.gallery
            this.infodata.push(res.data.info)
            this.commentdata.push(res.data.comment)
            this.attributedata=res.data.attribute
       
    }

    @action async topicData(params){
        let res=await topicData(params)
            // console.log(res.data)
            this.topicdata=res.data.data
    }

    @action async messageData(params){
        let res=await messageData(params)
            // console.log(res.data)
            this.estimatedata=res.data.data
    }

    @action async topicSpecialData(params){
        let res=await topicSpecialData(params)
            console.log(res.data)
            this.topicSpecialdata.push(res.data)
       
    }

    @action async addMessageData(content,typeId,valueId){
        let data=await addMessageData({content:content,typeId:typeId,valueId:valueId})
        console.log(data)
    }


    
}