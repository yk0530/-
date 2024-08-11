//配置路由

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import store from '@/store';
Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

//配置路由
let router = new VueRouter({
    routes,
    //滚动行为，控制路由跳转时页面的滚动行为
    scrollBehavior(to,from,savePosition){
        return {y:0}
    }
})

router.beforeEach(async(to,from,next)=>{
    //to可以获取到你要跳转到哪个路由信息
    //from可以获取到你从哪个路由跳转过来
    //next是一个函数，调用next()表示放行，允许跳转
    next();
    let token = store.state.login.token;
    let name = store.state.login.userInfo.name;
    if(token){
        if(to.path == '/login'){
            next('/home'); //如果已经登录了，还想去登录页，直接跳转到首页
        } else {
            if(name){
                next(); //如果已经登录了，并且有用户信息，直接放行
            } else {
                try {
                    await store.dispatch('getUserInfo')        
                    next();
                } catch (error) {
                    // token失效了
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    } else {
        let toPath = to.path;
        if(toPath.indexOf('/trade')!= -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1){
            // 把未登录的时候想去没去成的地方存储在地址栏
            next('/login?redirect='+toPath)
        } else {
            next();
        }
        next();
    }     
})

export default router;