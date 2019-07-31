import React from "react";
import Loadable from "react-loadable";
function Loading() {
  return <div>loading..</div>;
}
const Login=Loadable({
  loading: Loading,
  loader: () => import("../viewser/login/login")
});
const Categorys=Loadable({
  loading: Loading,
  loader: () => import("../viewser/categorys/categorys")
});
const Home = Loadable({
  loading: Loading,
  loader: () => import("../viewser/home")
});
const Special = Loadable({
  loading: Loading,
  loader: () => import("../viewser/special")
});
const Fication = Loadable({
  loading: Loading,
  loader: () => import("../viewser/fication")
});
const Shop = Loadable({ 
    loading: Loading,
    loader: () => import("../viewser/shop")
  });
  const My = Loadable({
    loading: Loading,
    loader: () => import("../viewser/my")
  });
  const GoodsSearch = Loadable({
    loading: Loading,
    loader: () => import("../viewser/goodsSearch")
  });
  
const BrandDetail=Loadable({
  loading: Loading,
  loader: () => import("../viewser/brandDetail")
});
const TopicDetail=Loadable({
  loading: Loading,
  loader: () => import("../viewser/topicDetail")
});
const Goods=Loadable({
  loading: Loading,
  loader: () => import("../viewser/goods/goods")
});
const Goodst=Loadable({
  loading: Loading,
  loader: () => import("../viewser/goodst")
});
const Liuan=Loadable({
  loading: Loading,
  loader: () => import("../viewser/liuyan/index")
});
const Categorysc=Loadable({
  loading: Loading,
  loader: () => import("../viewser/categorysc")
});
<<<<<<< HEAD
const Collect=Loadable({
  loading: Loading,
  loader: () => import("../viewser/collect")
});

=======
const TopicCommentWrite=Loadable({
  loading: Loading,
  loader: () => import("../viewser/addMessage/addMessage")
});
>>>>>>> mengyali
export default [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    name: "首页",
    isTab: true,
    icon: "bank"
  },
  {
    // name: "留言",
    path: "/comment/:id",
    component: Liuan
  },
  {
    // name: "专题详情",
    path: "/topicDetail/:id",
    component: TopicDetail
  },
  {
    // name: "添加留言",
    path: "/topicCommentWrite/:id",
    component: TopicCommentWrite
  },
  {
    // name: '制造商详情',
    path: '/brandDetail/:id',
    component: BrandDetail
  },
  {
  // name: '制造商详情',
  path: '/goods/:id',
  component: Goods
  },
  {
    path: '/categorys/:id',
    component: Categorys,
  },{
    path: "/special",
    component: Special,
    name: "专题",
    icon: "switcher"
  },{
    path: "/fication",
    component: Fication,
    name: "分类",
    icon: "carry-out"
  },{
    path: "/shop",
    component: Shop,
    name: "购物车",
    icon: "shopping-cart"
  },{
    path: "/my",
    component: My,
    name: "我的",
    icon: "user-add"
  }, {
    path: "/goodsSearch",
    component: GoodsSearch,
  }, {
    path: "/categorys",
    component: Categorys,
  },{
    path: "/categorysc",
    component:Categorysc
  },{
    path: "/goodst",
    component:Goodst
  },{
		path: "/collect",
		component:Collect
	},{
    redirect: "/",
    path: "/login"
  }
];
