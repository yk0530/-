import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Detail from '../pages/Detail';
import AddCartSuccess from '../pages/AddCartSuccess';
import shopCart from '../pages/ShopCart';
import Trade from '../pages/Trade';
import Pay from '../pages/Pay';
import PaySuccess from '../pages/PaySuccess';
import Center from '../pages/Center';
import MyOrder from '../pages/Center/myOrder';
import GroupOrder from '../pages/Center/groupOrder';
export default [
    {
        path:'/home',
        component:Home,
        meta:{
            show:true,
        }
    },
    {
        path:'/search/:keyword?',
        component:Search,
        meta:{
            show:true,
        },
        name:'search'
    },
    {
        path:'/login',
        component:Login,
        meta:{
            show:false,
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            show:false,
        }
    },
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/detail/:skuId',
        component:Detail,
        meta:{
            show:true,
        }
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{
            show:true,
        }
    },
    {
        path:'/shopcart',
        component:shopCart,
        meta:{
            show:true,
        }
    },
    {
        path:'/trade',
        component:Trade,
        meta:{
            show:true,
        },
        beforeEnter:(to,from,next)=>{
            if(from.path == '/shopcart' || '/trade'){
                next()
            }else{
                next(false)
            } 
        }
    },
    {
        path:'/pay/:orderId',
        component:Pay,
        name:'pay',
        meta:{
            show:true,
        },
        beforeEnter:(to,from,next) => {
            if(from.path == '/trade' || '/pay'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{
            show:true,
        }
    },
    {
        path:'/center',
        component:Center,
        meta:{
            show:true,
        },
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder,
            },
            {
                path:'/center',
                redirect:'myorder'
            }
        ]
    }
]