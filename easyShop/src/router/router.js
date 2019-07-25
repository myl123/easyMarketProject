import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
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
    path: '/categorys/:id',
    component: Categorys,
    name: '分类商品',
  },{
    path: "/special",
    component: Special,
    name: "专题",
    isTab: true,
    icon: "switcher"
  },{
    path: "/fication",
    component: Fication,
    name: "分类",
    isTab: true,
    icon: "carry-out"
  },{
    path: "/shop",
    component: Shop,
    name: "购物车",
    isTab: true,
    icon: "shopping-cart"
  },{
    path: "/my",
    component: My,
    name: "我的",
    isTab: true,
    icon: "user-add"
  }
];
