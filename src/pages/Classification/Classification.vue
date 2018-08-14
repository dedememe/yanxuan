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
            <li>推荐专区</li>
            <li>七夕专区</li>
            <li>爆品区</li>
            <li>居家</li>
            <li>鞋包配饰</li>
            <li>赋服装</li>
            <li>电器</li>
            <li>洗护</li>
            <li>饮食</li>
            <li>餐厨</li>
            <li>婴童</li>
            <li>文体</li>
            <li>特色区</li>
          </ul>
        </div>
        <div class="cate-right" ref="cateRight">
          <div class="cate-banner">
            <img src="http://yanxuan.nosdn.127.net/0df7dec6efb8baa06643f5ee04735fe9.jpg?imageView&thumbnail=0x196&quality=75" alt="">
          </div>
          <div class="cate-right-list">
            <div class="right-list-head">
              <div>推荐专区精选</div>
            </div>
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/3b6964c0a4eb6186736da883c17e86f0.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <div>夏凉满300减200</div>
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
export default {
  mounted () {
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
          width 100%
          height 12rem
          padding-left 0
          li
            width 1.62rem
            margin-top .34134rem
            font-size .28rem
            height .76794rem
            color #333
            font-weight 500
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
              font-size .28rem
              line-height 1.08rem
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
