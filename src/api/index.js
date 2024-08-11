//对所有API进行统一管理

import requests from './request';
import mockRequests from './mockAjax';

export function reqCategoryList(){
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}

export function reqBannerList(){
    return mockRequests({
        url:'/banner',
        method:'get',
    })
}

export function reqFloorList(){
    return mockRequests({
        url:'/floor',
        method:'get',
    })
}

export function reqGetSearchInfo(params){
    return requests({
        url:'/list',
        method:'post',
        data:params,
    })
}

export function reqGoodsInfo(skuId){
    return requests({
        url:`/item/${skuId}`,
        method:'get',
    })
}

export function reqAddOrUpdateShopCart(skuId,skuNum){
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post',
    })
}

export function reqCartList(){
    return requests({
        url:'/cart/cartList',
        method:'get',
    })
}

export function reqDeleteCartById(skuId){
    return requests({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete',
    
    })
}

export function reqUpdateCheckedById(skuId,isChecked){
    return requests({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get',
    })

}

export function reqGetCode(phone){
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'get',
    })
}

export function reqUserRegister(data){
    return requests({
        url:'/user/passport/register',
        method:'post',
        data:data,
    })
}

export function reqUserLogin(data){
    return requests({
        url:'/user/passport/login',
        method:'post',
        data:data,
    })
}

export function reqUserInfo(){
    return requests({
        url:'/user/passport/auth/getUserInfo',
        method:'get',
    })
}

export function reqLogout(){
    return requests({
        url:'/user/passport/logout',
        method:'get',
    })

}

export function reqAddressInfo(){
    return requests({
        url:'/user/userAddress/auth/findUserAddressList',
        method:'get',
    })

}

export function reqOrderInfo(){
    return requests({
        url:'/order/auth/trade',
        method:'get',
    })
}

export function reqSubmitOrder(tradeNo,data){
    return requests({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data,
    })
}

export function reqPayInfo(orderId){
    return requests({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'get',
    })
}

export function reqPayStatus(orderId){
    return requests({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get',
    })
}

export function reqMyOrderList(page,limit){
    return requests({
        url:`/order/auth/${page}/${limit}`,
        method:'get',
    })
}