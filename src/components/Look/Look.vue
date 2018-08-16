<template>
  <!--严选LOOK-->
  <div class="look">
    <div class="look-head">
      <span>严选LOOK</span>
    </div>
    <img v-if="detail.yxLook" :src="detail.yxLook.picUrl" alt="">
    <div class="look-author">
      <img v-if="detail.yxLook" :src="detail.yxLook.avatar" alt="">
      <span v-if="detail.yxLook">{{detail.yxLook.nickname}}</span>
    </div>
    <div v-if="detail.yxLook" class="look-det">{{detail.yxLook.content}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['detail'])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .look
    width 100%
    height 11rem
    .look-head
      width 100%
      height 1.2rem
      text-align center
      font-size .4rem
      line-height 1.2rem
    img
      width 7.5rem
      height 7.5rem
    .look-author
      text-align left
      margin-top .3rem
      margin-left .2rem
      margin-bottom .3rem
      img
        width .44rem
        height .44rem
        vertical-align center
      span
        font-size .28rem
        text-align center
        line-height .44rem
    .look-det
      color #666
      text-align left
      margin-left .2rem
      font-size 14px
</style>
