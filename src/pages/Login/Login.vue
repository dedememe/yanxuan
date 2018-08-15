<template>
    <div class="login">
      <div class="login-topBar">
        <a class="topBar-left" href="javascript:;">
          <i @click="goTo('/msite')" class="iconfont icon-shouye"></i>
        </a>
        <a class="topBar-middle" href="javascript:;">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png">
        </a>
        <div class="topBar-right">
          <a href="javascript:;">
            <i @click="goTo('/msite')" class="iconfont icon-sousuo"></i>
          </a>
          <a href="javascript:;">
            <i @click="goTo('/cart')" class="iconfont icon-gouwuche"></i>
          </a>
        </div>
      </div>
      <div class="logoWrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login-phone">
        <i class="iconfont"></i>
        <span>手机号码登录</span>
      </div>
      <div class="login-mailbox">
        <i class="iconfont"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="register">手机号快速注册</div>
    </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login
    width 100%
    height 13.34rem
    padding-bottom 1rem
    box-sizing border-box
    overflow hidden
    background-color #F2F5F4
    .login-topBar
      width 100%
      height .88rem
      position relative
      line-height .88rem
      z-index 100
      border-bottom 1px solid #ddd
      background-color #fff
      position fixed
      top 0
      .topBar-left
        margin-left .3rem
        position absolute
        left 0
        text-decoration none
        color #7e8c8d
        i
          font-size .56rem
      .topBar-middle
        display inline-block
        height .86rem
        img
          display inline-block
          width 1.72rem
          height .54rem
          line-height .86rem
          margin-top .16rem
      .topBar-right
        text-decoration none
        display inline-block
        position absolute
        right .3rem
        a
          font-size .7rem
          text-decoration none
          color #7e8c8d
          i
            font-size .56rem
    .logoWrap
      box-sizing borderbox
      margin-top .88rem
      width 100%
      height 45px
      text-align center
      padding 79.985px 0
      img
        width 133.98px
        height 45px
        line-height 204.97px
    .login-phone
      width 335px
      height 47px
      color #fff
      background-color #b4282d
      text-align center
      margin-left .4rem
      border 1px solid #b4282d
      box-sizing border-box
      border-radius .1rem
      line-height 47px
      font-size .28rem
      margin-bottom .3rem
    .login-mailbox
      width 335px
      height 47px
      color #fff
      background-color #fff
      text-align center
      margin-left .4rem
      border-radius .1rem
      line-height 47px
      font-size .28rem
      background transparent
      color #b4282d
      border 1px solid #b4282d
      box-sizing border-box
      margin-bottom .3rem
    .register
      font-size .28rem
</style>
