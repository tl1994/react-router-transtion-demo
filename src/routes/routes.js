import asyncComponent from '../utils/asyncComponent';
import Login from "../views/login";                                   //登陆

const Home = asyncComponent(() => import("../views/home"));           //大厅
const User = asyncComponent(() => import("../views/user"));           //个人中心

const routerConfig = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/user',
    component: User
  }
]
export default routerConfig;