import {
	BrowserRouter
} from "react-router-dom";
import React, {
	Component
} from "react";
import Loadable from "react-loadable";

function Loading() {
	return <div > loading.. < /div>;
}
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
export default [{
	path: "/home",
	component: Home,
	name: "首页",
	icon: "bank"
}, {
	path: "/special",
	component: Special,
	name: "专题",
	icon: "switcher"
}, {
	path: "/fication",
	component: Fication,
	name: "分类",
	icon: "carry-out",
}, {
	path: "/shop",
	component: Shop,
	name: "购物车",
	icon: "shopping-cart"
}, {
	path: "/my",
	component: My,
	name: "我的",
	icon: "user-add"
}, {
	path: "/goodsSearch",
	component: GoodsSearch,
},{
	redirect: "/",
	path: "/home"
}];
