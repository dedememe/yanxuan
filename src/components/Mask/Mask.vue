<template>
  <div class="mask" ref="msk">
    <i @click="close()" class="iconfont icon-shanchuguanbicha"></i>
    <div class="good">
      <span class="line">
        <div class="msk-good-header">新人专享礼</div>
      </span>
      <div class="msk-good-title">感谢使用网易严选，已为你准备了一份专享礼</div>
      <div class="msk-good-content">
        <div class="content-left">
          <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232" alt="">
        </div>
        <div class="content-right">
          <div class="msk-good-name">埃及进口长绒棉毛巾</div>
          <div class="msk-good-brand">Ralph Lauren</div>
          <div class="msk-good-price">32.00</div>
        </div>
      </div>
      <div class="msk-buy-button" @click="$refs.msk.style = 'display: none'">领券立减10.00</div>
      <div class="msk-more-button" @click="$router.replace('/classification')">查看更多特惠商品</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close () {
      this.$refs.msk.style = 'display: none'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .mask
    /*display flex*/
    /*flex-flow column nowrap*/
    width 100%
    height 100%
    background-color rgba(0,0,0,.5)
    position fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index 999
    i
      font-size .5rem
      position absolute
      right .5rem
      top .5rem
    .good
      width 6.3rem
      height 6.92rem
      background-color #fff
      transform: translate(-50%,-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      border-radius .2rem
      .line
        position relative
        .msk-good-header
          font-size .36rem
          color: #000
          font-weight bold
          &::before
            width 1rem
            height .05rem
            background #000
            content ''
            position absolute
            top 45%
            left 1.2rem
            line-height .48rem
          &::after
            width 1rem
            height .05rem
            background #000
            content ''
            position absolute
            top 45%
            line-height .36rem
      .msk-good-title
        margin-top .2rem
        font-size .24rem
      .msk-good-content
        margin-top .4rem
        height 2.33rem
        width 100%
        background-color #eee
        /*position relative*/
        .content-left
          width 3rem
          float left
          img
            width 2.32rem
            height 2.32rem
            display inline-block
        .content-right
          width 3rem
          display flex
          flex-direction column
          text-align right
          background-color #eee
          .msk-good-name
            display inline-block
            width 3rem
            text-align left
            margin-top .4rem
            font-size .24rem
          .msk-good-brand
            display inline-block
            text-align left
            margin-top .4rem
            font-size .24rem
            color #333
            width 1.46rem
            border 1px solid #666
            border-radius .01rem
          .msk-good-price
            text-align left
            margin-top .5rem
            color red
            font-size .24rem
      .msk-buy-button
        width 5.4rem
        height .8rem
        margin-top .8rem
        background-color #b4282d
        text-align center
        line-height .8rem
        border-radius .1rem
        margin-left .45rem
        color #fff
      .msk-more-button
        width 5.4rem
        height .8rem
        background-color #fff
        border 1px solid #666
        text-align center
        line-height .8rem
        border-radius .1rem
        box-sizing border-box
        margin-left .45rem
        margin-top .3rem
</style>
