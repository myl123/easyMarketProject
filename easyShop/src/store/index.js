// 引入模块
import Home from './modules/home'
import Fication from './modules/fication'
import Login from "./modules/login"
// 实例化模块
const home = new Home
const fication=new Fication
const login = new Login
export default{
    home,
    fication,
    login
}
