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
    // name: "专题详情",
    path: "/topicDetail/:id",
    component: TopicDetail
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
    redirect: "/",
    path: "/home"
  }
];
