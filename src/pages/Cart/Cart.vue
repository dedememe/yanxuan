<template>
    <div class="cart">
      <div class="cart-head">
        <span class="title">购物车</span>
        <div class="getCoupon ">领券</div>
      </div>
      <div class="service">
        <ul>
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
        </ul>
      </div>
      <div class="backgroundPic">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
        <div class="img-det">去添加点什么吧</div>
      </div>
      <div class="cart-button">
        <div @click="goTo('/login')" class="button">登录</div>
      </div>
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
  *
    margin: 0
    padding: 0
    box-sizing border-box
  .cart
    width: 100%
    height 13.34rem
    background-color #f4f4f4
    .cart-head
      height .88rem
      width 100%
      padding 0 .3rem
      background-color #fff
      .title
        text-align center
        line-height .88rem
        font-size .36rem
      .getCoupon
        text-align right
        color red
        margin-top -.6rem
        font-size .28rem
    .service
      width 100%
      background-color #f4f4f4
      height .7rem
      ul
        display flex
        flex-direction row
        justify-content space-around
        text-align center
        line-height .7rem
        li
          font-size .24rem
          color #666
    .backgroundPic
      background-color #f4f4f4
      width 100%
      height 3rem
      margin-top 3.8rem
      img
        width 2.48rem
        height 2.48rem
      .img-det
        color #999
        font-size .28rem
        margin-top -.2rem
    .cart-button
      width 100%
      margin-top .1rem
      .button
        width 4.8rem
        height .92rem
        background-color #b4282d
        margin-left 1.35rem
        text-align center
        color #fff
        font-size .28rem
        line-height .92rem
        border-radius .1rem
</style>
