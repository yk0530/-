<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
  import Brand from './Brand'
  import Floor from './Floor'
  import Like from './Like'
  import ListContainer from './ListContainer'
  import Rank from './Rank'
  import TodayRecommend from './TodayRecommend'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    components: {
      Brand,
      Floor,
      Like,
      ListContainer,
      Rank,
      TodayRecommend,
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    },
    mounted(){
      this.$store.dispatch('getFloorList');
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style lang="less" scoped>

</style>