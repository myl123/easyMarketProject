<<<<<<< HEAD
# easyMarketProject

------

主要应用mobx

> * observable   修饰属性
> * action  修饰方法
> * inject  装饰器

------
# 页面分布
- |-登陆
- |-首页
-  |--居家，餐具，配件，服饰，兴趣   /categorys
-  |--制造商  /brandDetail
-  |--新品首发  /goods
-  |--人气推荐  /goods
-  |---选择参数 =》弹出弹框
-  |---评价  /typeId
-  |---大家都在看
- |-专题
- |-分类
- |-购物车
- |-我的
## EasyMarket Tips

> - EasyMarket 正在更新维护状态，部分功能尚未没完成。
> - 倘若您发现 Bug 或者有优化意见及其他宝贵意见，欢迎您提交 issue 或者联系我 qq = 1244282340 邮箱4282340@qq.com
> - EasyMarket 服务端 ，请移步至 [EasyMarketSever](https://github.com/Peroluo/easyMarketSever)。

## EasyMrket 本地部署

> 1. git clone https://github.com/Peroluo/easyMarketApp.git
> 2. 安装依赖 cnpm install
> 3. 修改 package.json 文件中 proxy 字段的值 = 你本地服务器的 ip 地址 （"proxy": "http://127.0.0.1:8888"）
> 4. 如果老铁不会在本地部署服务端，可以将第三步的 ip 地址，改成我部署的服务 ip 地址（"proxy": "http://202.96.155.121:8888"）,我部署的服务比较低级，避免挂掉，各位老铁，还是在你本地部署个吧~
> 5. npm start
> 6. 部署到服务端 npm run build ,将 build 文件夹中的文件放到 [EasyMarketSever](https://github.com/Peroluo/easyMarketSever) 的 www/web/easyMarket 目录中
### 图片预览


|         首页         |        制造商         |         商品分类         |         收藏商品         |
| :------------------: | :-------------------: | :----------------------: | :----------------------: |
| ![](./imgs/home.png) | ![](./imgs/brand.png) | ![](./imgs/category.png) | ![](./imgs/likeList.png) |

|         专题          |          专题详情           |            分类检索            |          商品查询           |
| :-------------------: | :-------------------------: | :----------------------------: | :-------------------------: |
| ![](./imgs/topic.png) | ![](./imgs/topicDetail.png) | ![](./imgs/categorySearch.png) | ![](./imgs/goodsSearch.png) |

|        购物车        |          商品详情           |        更多评论         |         我的         |
| :------------------: | :-------------------------: | :---------------------: | :------------------: |
| ![](./imgs/cart.png) | ![](./imgs/goodsDetail.png) | ![](./imgs/comment.png) | ![](./imgs/mine.png) |



<figure class="third">
    <img src="./imgs/EasyMarket.gif" width="320"/>
</figure>

------

##目录简介

- [x] 首页
- [ ] 专题
- [x] 分类
- [ ] 购物车
- [ ] 我的
=======
# EasyMarket [易购](https://github.com/Peroluo/easyMarketApp)

> ​EasyMarket 是仿网易严选 UI 设计的 H5 webApp。项目是基于 React+Redux+Redux-saga+Axios+React-router。
> ​EasyMarket 采用阿里 antd-design-mobile 的 UI 组件。


<figure >
<img src="./imgs/qrCode.png" width="200"/>
</figure >

## EasyMarket Screenshots

|         首页         |        制造商         |         商品分类         |         收藏商品         |
| :------------------: | :-------------------: | :----------------------: | :----------------------: |
| ![](./imgs/home.png) | ![](./imgs/brand.png) | ![](./imgs/category.png) | ![](./imgs/likeList.png) |

|         专题          |          专题详情           |            分类检索            |          商品查询           |
| :-------------------: | :-------------------------: | :----------------------------: | :-------------------------: |
| ![](./imgs/topic.png) | ![](./imgs/topicDetail.png) | ![](./imgs/categorySearch.png) | ![](./imgs/goodsSearch.png) |

|        购物车        |          商品详情           |        更多评论         |         我的         |
| :------------------: | :-------------------------: | :---------------------: | :------------------: |
| ![](./imgs/cart.png) | ![](./imgs/goodsDetail.png) | ![](./imgs/comment.png) | ![](./imgs/mine.png) |

## EasyMarket Preview
##已做完:分类页面
##遇到的问题 切换颜色的bug 奇趣分类bug待修改中

## EasyMarket Tips

> - EasyMarket 正在更新维护状态，部分功能尚未没完成。
> - 倘若您发现 Bug 或者有优化意见及其他宝贵意见，欢迎您提交 issue 或者联系我 qq = 1931253498 、Email = 1931253498@qq.com
> - EasyMarket 服务端 ，请移步至 [EasyMarketSever](https://github.com/Peroluo/easyMarketSever)。

## EasyMrket 本地部署

> 1. git clone git@github.com:myl123/easyMarketProject.git
> 2. 安装依赖 cnpm install
> 3. 修改 package.json 文件中 proxy 字段的值 = 你本地服务器的 ip 地址 （"proxy": "http://127.0.0.1:8888"）
> 4. 如果老铁不会在本地部署服务端，可以将第三步的 ip 地址，改成我部署的服务 ip 地址（"proxy": "http://169.254.12.55:8888"）,我部署的服务比较低级，避免挂掉，各位老铁，还是在你本地部署个吧~
> 5. npm start
> 6. 部署到服务端 npm run build ,将 build 文件夹中的文件放到 [EasyMarketSever](https://github.com/Peroluo/easyMarketSever) 的 www/web/easyMarket 目录中

## EasyMarket 未完成功能

> - 购物车、我的...未来会不断完善！

>>>>>>> 98206389a18eef55d01761b1dd070aab452ca15f

