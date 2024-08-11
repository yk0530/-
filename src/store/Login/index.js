import { reqUserLogin,reqUserInfo,reqLogout } from "@/api";

const state = {
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}

const mutations = {
    USERLOGIN(state,token) {
        state.token = token;
    },
    USERINFO(state,userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state){
        state.token = '';
        state.userInfo = {};
        localStorage.removeItem('TOKEN');
    }
}

const actions = {
    async userLogin({ commit }, user) {
        const result = await reqUserLogin(user);
        // console.log(result)
        if (result.code === 200) {
            commit('USERLOGIN', result.data.token);
            localStorage.setItem('TOKEN',result.data.token);
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'));
        }
    },
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        // console.log(result)
        if (result.code === 200) {
            commit('USERINFO', result.data);
            // setToken(result.data.token);
            return 'ok';
        } else {
            // return Promise.reject(new Error('fail'));
            console.log('获取用户信息失败');
        }
    },
    async userLogout({commit}){
        const result = await reqLogout();
        // console.log(result);
        if(result.code === 200){
            commit('CLEAR');
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'));
        }
    }
}

const getters = {
    
}

export default {
    state,
    mutations,
    actions,
    getters

}