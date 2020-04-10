import Vue from 'vue'
import Router from 'vue-router'

// 引入1级组件
import DashBoard from './../views/dashboard/DashBoard'
import Login from './../views/login/Login'
import Register from './../views/register/Register'
import Forgot from './../views/forgot/Forgot'
// 启用懒加载
const Home = () => import('./../views/home/Home.vue');
const Travels = () => import('./../views/travels/Travels.vue');
const GoTravel = () => import('./../views/gotravel/GoTravel.vue');
const Mine = () => import('./../views/mine/Mine.vue');
const TravelDesc = () => import('./../components/TravelDesc.vue');
const WriteTravel = () => import('./../views/travels/components/WriteTravel.vue');
const Searchs = () => import('./../views/travels/components/Search.vue');

const Scenicspot = () => import('./../views/gotravel/components/scenicspot/Scenicspot.vue');
const Search = () => import('./../views/gotravel/components/Searchs.vue');
const Scenicspots = () => import('./../views/gotravel/components/scenicspot/Scenicspots.vue');
const BuyTicket = () => import('./../views/gotravel/components/scenicspot/BuyTicket.vue');
const Order = () => import('./../views/gotravel/components/scenicspot/Order.vue');
const DayPlay = () => import('./../views/gotravel/components/dayplay/DayPlay.vue');
const ScenicspotDesc = () => import('./../views/gotravel/components/common/ScenicspotDesc.vue');
const Collection = () => import('./../views/mine/components/body/Collection.vue');
const PersonalDynamic = () => import('./../views/mine/components/body/PersonalDynamic.vue');
const ChangeDocument = () => import('./../views/mine/components/ChangeDocument.vue');
const MyOrder = () => import('./../views/mine/components/body/MyOrder.vue');


Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register },
        { path: '/forgot', name: 'forgot', component: Forgot },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard,
            children: [
                // 首页路由
                {
                    path:'/',
                    redirect: '/dashboard/home'
                },
                //meta: { keepAlive: true } 的作用为将一些数据不易改变的数据进行缓存，当再次访问该页面的时候不会重新请求数据
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'traveldesc/:storyId',
                    name: 'traveldesc',
                    component: TravelDesc
                },
                // 游记页面路由
                {
                    path: 'travels',
                    name: 'travels',
                    component: Travels
                },
                {
                    path: 'travels/writetravel',
                    name: 'writetravel',
                    component: WriteTravel
                },
                {
                    path: 'travels/search',
                    name: 'search',
                    component: Searchs
                },
                // { path: 'travels/traveldesc/:storyId', name: 'traveldesc', component: TravelDesc},
                // 去旅行页面路由
                {
                    path: 'gotravel',
                    name: 'gotravel',
                    component: GoTravel
                },
                {
                    path: 'gotravel/scenicspotdesc/:scenicspotId',
                    name: 'scenicspotdesc',
                    component: ScenicspotDesc
                },
                {
                    path: 'gotravel/scenicspot',
                    name: 'scenicspot',
                    component: Scenicspot
                },
                {
                    path: 'gotravel/search',
                    name: 'searchs',
                    component: Search
                },
                {
                    path: 'gotravel/scenicspot/scenicspots',
                    name: 'scenicspots',
                    component: Scenicspots
                },
                {
                    path: 'gotravel/scenicspot/scenicspots/buyticket',
                    name: 'buyticket',
                    component: BuyTicket
                },
                {
                    path: 'gotravel/scenicspot/scenicspots/buyticket/order/:address',
                    name: 'order',
                    component: Order
                },
                {
                    path: 'gotravel/dayplay',
                    name: 'dayplay',
                    component: DayPlay
                },
                // 个人中心页面路由
                {
                    path: 'mine',
                    name: 'mine',
                    component: Mine
                },
                {
                    path: 'mine/myorder/:userId',
                    name: 'myorder',
                    component: MyOrder
                },
                {
                    path: 'mine/collection/:userId',
                    name: 'collection',
                    component: Collection },
                {
                    path: 'mine/personaldynamic/:userId',
                    name: 'personaldynamic',
                    component: PersonalDynamic
                },
                {
                    path: 'mine/changedocument/:userId',
                    name: 'changedocument',
                    component: ChangeDocument
                },
            ]
        },
    ]
});
