import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import search from './search'
import detail from './Detail'
import shopcart from './ShopCart'
import login from './Login'
import register from './register'
import trade from './Trade'

Vue.use(Vuex);


export default new Vuex.Store({ 
    modules:{
        home,
        search,
        detail,
        shopcart,
        register,
        login,
        trade
    }
});