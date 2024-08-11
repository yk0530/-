import { reqAddressInfo,reqOrderInfo } from "@/api";

const state = {
    addressList: [],
    orderInfo: {},
}

const mutations = {
    GETADDRESSINFO(state,addressList){
        state.addressList = addressList;
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    
    }
}

const actions = {
    async getAddressInfo({ commit }) {
        let result =  await reqAddressInfo();
        // console.log(result);
        if(result.code === 200) {
            commit('GETADDRESSINFO',result.data);
        } else {
            console.log('获取地址信息失败');
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        // console.log(result);
        if(result.code === 200) {
            commit('GETORDERINFO',result.data);
        } else {
            console.log('获取订单信息失败');
        }
    },
}

const getters = {
    detailArrayList(state) {
        return state.orderInfo.detailArrayList || [];
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}