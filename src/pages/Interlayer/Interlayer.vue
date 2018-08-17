<template>
    <div class="interLayer">
      <div class="imgTop">
        <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
      </div>
      <div class="imgMiddle">
        <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
      </div>
      <div class="imgBottom">
        <img src="//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg" alt="">
      </div>
      <div class="fake-button" @click="$router.replace('/msite')"></div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .interLayer
    width 100%
    height 13.34rem
    background-color #e3e3e2
    .imgTop
      height 3.86rem
      img
        width 7.5rem
        height 3.86rem
    .imgMiddle
      height 3.27rem
      img
        width 7.5rem
        height 3.27rem
    .imgBottom
      img
        width 7.5rem
        height 4.32rem
    .fake-button
      position fixed
      bottom 3.4rem
      left 2.2rem
      width 3rem
      height .7rem
      background-color transparent
</style>
