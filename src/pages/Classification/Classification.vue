<template>
    <div class="classification">
      <div class="classifi-head">
        <div class="classifi-input">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共12022款好物</span>
        </div>
      </div>
      <div class="cates">
        <div class="cateList" ref="cateList">
          <ul>
            <li v-if="nav"  :class="{active: index === nowIndex}" v-for="(item, index) in nav.categoryL1List" :key="index" @click="getIndex(index)">{{item.name}}</li>
          </ul>
        </div>
        <div class="cate-right" ref="cateRight">
          <div class="cate-banner">
            <img v-if="nav.categoryL1List" :src="nav.categoryL1List[nowIndex].bannerUrl" alt="">
          </div>
          <div class="cate-right-list" v-if="nav.categoryL1List">
            <div class="right-list-head">
              <div>
                <span class="line">
                  {{nav.categoryL1List[nowIndex].name}}精选
                </span>
              </div>
            </div>
            <ul>
              <li v-if="nav.categoryL1List" v-for="(item, index) in nav.categoryL1List[nowIndex].subCateList" :key="index">
                <a href="javascript:;">
                  <img :src="item.wapBannerUrl" alt="">
                  <div>{{item.name}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      nowIndex: 0
    }
  },
  mounted () {
    this.$store.dispatch('getNav', () => {
      this.$nextTick(() => {
        this.cateScroll = new BetterScroll(this.$refs.cateList, {
          scrollY: true,
          click: true
        })
        this.cateRightScroll = new BetterScroll(this.$refs.cateRight, {
          scrollY: true,
          click: true
        })
      })
    })
  },
  computed: {
    ...mapState(['nav'])
  },
  methods: {
    getIndex (index) {
      this.nowIndex = index
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  *
    box-sizing border-box
  .classification
    width 100%
    .classifi-head
      background-color #fff
      position fixed
      top 0
      z-index 100
      width 100%
      height .88rem
      padding 0.16rem .256rem
      border-bottom 1px solid #eee
      .classifi-input
        text-align center
        width 6.9rem
        height .56rem
        line-height .56rem
        background-color #ededed
        border-radius .1rem
        color #666
        i
          vertical-align middle
    .cates
      /*overflow hidden*/
      width 7.5rem
      .cateList
        position fixed
        left 0
        top .88rem
        width 1.62rem
        height 11.9268rem
        border-right 1px solid #eee
        overflow hidden
        display inline-block
        ul
          margin-top 0
          list-style none
          display flex
          flex-direction column
          flex-wrap nowrap
          flex-shrink 0
          justify-content space-around
          /*height 12rem*/
          padding-left 0
          li
            width 1.62rem
            margin-top .34134rem
            font-size .28rem
            height .76794rem
            color #333
            font-weight 500
            &.active
              border-left 3px solid red
              color red
              font-size .36rem
              line-height .76794rem
      .cate-right
        position absolute
        right 0
        top .88rem
        padding .3rem .3rem
        box-sizing border-box
        margin 0
        width 294px
        display inline-block
        vertical-align top
        font-size 0
        .cate-banner
          img
            width 100%
            height 96px
        .cate-right-list
          width 100%
          height 4rem
          .right-list-head
            width 100%
            height 1.08rem
            div
              .line
                font-size .28rem
                line-height 1.08rem
                &::before
                  content ''
                  display block
                  position absolute
                  left 1rem
                  top 2.7rem
                  width 50px
                  height 1px
                  background-color #eee
                &::after
                  content ''
                  display block
                  position absolute
                  right 1rem
                  top 2.7rem
                  width 50px
                  height 1px
                  background-color #eee
          ul
            width 100%
            padding 0
            text-align left
            li
              display inline-block
              width 72px
              height 108px
              vertical-align top
              margin-right .3rem
              text-align center
              a
                display inline-block
                width 72px
                height 108px
                text-decoration none
                img
                  width 72px
                  height 72px
                div
                  font-size .24rem
                  width 100%
                  height 100%
                  color #555

</style>
