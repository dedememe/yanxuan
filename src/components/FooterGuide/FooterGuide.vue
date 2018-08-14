<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" @click="goto('/msite')" :class= "{on: $route.path === '/msite'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" @click="goto('/distinguish')" :class= "{on: $route.path === '/distinguish'}">
      <span class="item_icon">
        <i class="iconfont icon-fangkuaidagou-weixuanzhong"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" @click="goto('/classification')" :class= "{on: $route.path === '/classification'}">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" @click="goto('/cart')" :class= "{on: $route.path === '/cart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="goto('/profile')" :class= "{on: $route.path === '/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-xiazai"></i>
      </span>
      <span>个人</span>
    </span>

  </footer>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin .1rem
      color #999999
      &.on
        color #02a774
      span
        font-size .24rem
        margin-top .04rem
        margin-bottom .04rem
        .iconfont
          font-size .44rem
</style>
