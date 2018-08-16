<template>
  <div class="lbt-wraper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <ul class="lbt-ul">
      <li v-for="(item, index) in home.policyDescList" :key="index">
        <a href="javascript:;">
          <i class="iconfont icon-tick"></i>
          <span>{{item.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
export default {
  computed: {
    ...mapState(['banner', 'home'])
  },
  mounted () {
    //  轮播图
    this.$store.dispatch('getBanner', () => {
      this.$nextTick(() => {
        this.swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 2000
          }
        })
      })
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .lbt-wraper
    margin-top 1.66rem
    .swiper-container
      width 100%
      height 200px
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            height 100%
    .lbt-ul
      display flex
      flex-direction row
      justify-content space-between
      list-style none
      padding-left 0
      li
        margin-left .1rem
        margin-right .1rem
        a
          text-decoration none
          color #000
          font-size .26rem
          i
            color #F5DEB3
            font-size .26rem
</style>
