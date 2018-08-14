<template>
  <div class="msite-wraper">
    <!--<Masks/>-->
    <!--头部-->
    <div class="head-wraper">
      <div class="header-top">
        <a href="javascript:;">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png">
        </a>
        <div class="searchInput">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品, 共11784款好物</span>
        </div>
      </div>
      <div class="listWraper" ref="listWraper">
        <ul class="routeList">
          <li>推荐</li>
          <li>居家</li>
          <li>鞋包配饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
          <li>饮食</li>
          <li>餐厨</li>
          <li>婴童</li>
          <li>文体</li>
          <li>特色区</li>
        </ul>
      </div>
    </div>
    <!--轮播图-->
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
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-tick"></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-tick"></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="iconfont icon-tick"></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--品牌制造商直供-->
    <div class="brand">
      <div class="brand-header">
        <span class="title">品牌制造商直供</span>
        <i class="iconfont icon-57"></i>
      </div>
      <ul class="brandList">
        <li>
        <a href="/item/manufacturer?tagId=1026000&page=1&size=100">
          <div class="brand-title">
            <div class="brandName">CK制造商</div>
            <div class="brandDetail">25元起</div>
            <i class="iconfont icon-57"></i>
          </div>
          <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65" alt="">
        </a>
      </li>
        <li>
          <a href="/item/manufacturer?tagId=1026000&page=1&size=100">
            <div class="brand-title">
              <div class="brandName">CK制造商</div>
              <div class="brandDetail">25元起</div>
              <i class="iconfont icon-57"></i>
            </div>
            <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65" alt="">
          </a>
        </li>
        <li>
          <a href="/item/manufacturer?tagId=1026000&page=1&size=100">
            <div class="brand-title">
              <div class="brandName">CK制造商</div>
              <div class="brandDetail">25元起</div>
              <i class="iconfont icon-57"></i>
            </div>
            <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65" alt="">
          </a>
        </li>
        <li>
          <a href="/item/manufacturer?tagId=1026000&page=1&size=100">
            <div class="brand-title">
              <div class="brandName">CK制造商</div>
              <div class="brandDetail">25元起</div>
              <i class="iconfont icon-57"></i>
            </div>
            <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--新品首发-->
    <div class="newGoods">
      <div class="good-header">
        <div class="good-header-title">
          <span>新品首发</span>
          <div class="all">查看全部 ></div>
        </div>
      </div>
      <div class="GoodWraper" ref="newGoodItem">
        <ul class="newGoodItem" >
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <span class="new-tag">新品特惠</span>
            <span class="new-tag">七夕推荐</span>
            <div class="name">小龙虾</div>
            <div class="newGoodDescripe">当季肥美小龙虾。。。。。</div>
            <div class="price">￥20</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="split"></div>
    <!--人气推荐 好物精选-->
    <div class="popGoods">
      <div class="pops-header">
        <div class="pops-header-title">
          <span>人气推荐 好物精选</span>
          <div class="all">查看全部 ></div>
        </div>
      </div>
      <div class="GoodWraper" ref="popGoodItem">
        <ul class="popGoodItem" >
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="popDetail">
              <div class="name">棉被</div>
              <div class="popGoodDescripe">100%棉填充。。。。。</div>
              <div class="price">￥20</div>
            </div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="name">棉被</div>
            <div class="popGoodDescripe">100%棉填充。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="name">棉被</div>
            <div class="popGoodDescripe">100%棉填充。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="name">棉被</div>
            <div class="popGoodDescripe">100%棉填充。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="name">棉被</div>
            <div class="popGoodDescripe">100%棉填充。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="name">棉被</div>
            <div class="popGoodDescripe">100%棉填充。。。。。</div>
            <div class="price">￥20</div>
          </li>
          <li>
            <div class="imgWraper">
              <img src="http://yanxuan.nosdn.127.net/63b5265bf291e2b8ef3d0ff74de8a5c3.png?imageView&quality=65&thumbnail=330x330" alt="">
            </div>
            <div class="name">棉被</div>
            <div class="popGoodDescripe">100%棉填充。。。。。</div>
            <div class="price">￥20</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="split"></div>
    <!--限时抢购-->
    <div class="limitedGoods">
      <div class="limit-left">
        <h4>严选限时购</h4>
        <div class="countTime">
          <span class="hour">00</span>
          <span>:</span>
          <span class="minute">09</span>
          <span>:</span>
          <span class="second">12</span>
        </div>
        <span>下一场 10:00 开始</span>
      </div>
      <div class="limit-right">
        <img src="http://yanxuan.nosdn.127.net/a09a027fa61bcc00061d3943b50e12fc.png?imageView&quality=85&thumbnail=330x330" alt="">
      </div>
    </div>
    <div class="split"></div>
    <!--福利社-->
    <div class="welfare">
      <a href="javascript:;"></a>
    </div>
    <div class="split"></div>
    <!--专题精选-->
    <div class="goodChoice">
      <div class="choice-header">
        <a href="javascript:;">
          <span>专题精选</span>
          <i class="iconfont icon-57"></i>
        </a>
      </div>
      <div class="choice-item" ref="choiceItem">
        <ul>
          <li>
            <a href="javascipt:;">
              <img src="https://yanxuan.nosdn.127.net/e1b2996dae287c903ea2816785641376.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
            </a>
            <div class="choice-detail">
              <h4>青汁兑蜂蜜，轻盈又甜蜜</h4>
              <p>每天来一杯青汁蜂蜜水，给生活添一点甜蜜</p>
              <span>129元起</span>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/2f49b6ded76919ac7894b02fc9347410.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
            </a>
            <div class="choice-detail">
              <h4>丁磊的好货推荐</h4>
              <p>网易CEO专栏</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="split"></div>
    <!--居家好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
            <div class="homeGoodWraper">
              <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="special">硬度偏好者优选</div>
            </div>
            <div class="homeGoodDet">冬夏两用保护身体haohaohaohaohaohaohaohaohaohaohao</div>
            <div class="homeGoodPri">￥2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体haohaohaohaohaohaohaohaohaohaohao</div>
          <div class="homeGoodPri">￥2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体haohaohaohaohaohaohaohaohaohaohao</div>
          <div class="homeGoodPri">￥2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体haohaohaohaohaohaohaohaohaohaohao</div>
          <div class="homeGoodPri">￥2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--鞋包配饰好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--服装好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--电器好物-->
    <div class="homeGood">
    <div class="homeHeader">
      <h3>居家好物</h3>
    </div>
    <ul>
      <li>
        <div class="homeGoodWraper">
          <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="special">硬度偏好者优选</div>
        </div>
        <div class="homeGoodDet">冬夏两用保护身体</div>
        <div class="homeGoodPri">2099</div>
      </li>
      <li>
        <div class="homeGoodWraper">
          <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="special">硬度偏好者优选</div>
        </div>
        <div class="homeGoodDet">冬夏两用保护身体</div>
        <div class="homeGoodPri">2099</div>
      </li>
      <li>
        <div class="homeGoodWraper">
          <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="special">硬度偏好者优选</div>
        </div>
        <div class="homeGoodDet">冬夏两用保护身体</div>
        <div class="homeGoodPri">2099</div>
      </li>
      <li>
        <div class="homeGoodWraper">
          <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="special">硬度偏好者优选</div>
        </div>
        <div class="homeGoodDet">冬夏两用保护身体</div>
        <div class="homeGoodPri">2099</div>
      </li>
    </ul>
  </div>
    <!--洗护好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--饮食好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--餐厨好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--婴童好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--文体好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <!--特色区好物-->
    <div class="homeGood">
      <div class="homeHeader">
        <h3>居家好物</h3>
      </div>
      <ul>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
        <li>
          <div class="homeGoodWraper">
            <img src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="special">硬度偏好者优选</div>
          </div>
          <div class="homeGoodDet">冬夏两用保护身体</div>
          <div class="homeGoodPri">2099</div>
        </li>
      </ul>
    </div>
    <div class="split"></div>
    <div class="bottom">
      <div class="download">
        <a href="javascript">下载APP</a>
        <a href="javascript">电脑版</a>
      </div>
      <div class="copyright">
        <p>网易公司版权所有</p>
        <p>食品经营许可证：122233455</p>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
import Masks from '../../components/Mask/Mask'
export default {
  components: {
    Masks
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BetterScroll(this.$refs.listWraper, {
        scrollX: true,
        click: true
      })
      this.newGoodScroll1 = new BetterScroll(this.$refs.newGoodItem, {
        scrollX: true,
        click: true
      })
      this.newGoodScroll12 = new BetterScroll(this.$refs.popGoodItem, {
        scrollX: true,
        click: true
      })
      this.newGoodScroll13 = new BetterScroll(this.$refs.choiceItem, {
        scrollX: true,
        click: true
      })
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
    this.$nextTick(() => {
      this.$store.dispatch('getBanner')
    })
  },
  computed: {
    ...mapState(['data', 'banner'])
  }
}
// 1rem = 16px
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite-wraper
    padding 0 0
    padding-bottom 1rem
    width 100%
    .head-wraper
      background-color #fff
      position fixed
      top 0
      z-index 100
      width 100%
      height 1.66rem
      .header-top
        box-sizing border-box
        padding .16rem .3rem
        height .88rem
        width 100%
        a
          width 1.38rem
          display inline-block
          line-height .88rem
          margin-left -.3rem
          img
            width 100%
        .searchInput
          float right
          width 5.32rem
          height .56rem
          line-height .56rem
          border 1px solid #ededed
          background #ededed
          border-radius .1rem
          margin-right 0.1rem
            span
              font-size .3rem
              color #666
      .listWraper
        width 100%
        overflow hidden
        /*margin 20px 0*/
        .routeList
          display flex
          flex-direction row
          flex-wrap nowrap
          justify-content space-between
          align-content center
          width 16rem
          height .3rem
          padding-left 0
          line-height .3rem
          li
            display flex
            flex-direction row
            flex-wrap nowrap
            justify-content space-between
            list-style none
            font-size .3rem
            margin-right .3rem
            margin-left .3rem
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
    .split
      width 100%
      height .2rem
      background-color #eee
    .brand
      width 100%
      height 6.6rem
      .brand-header
        width 100%
        height 50px
        .title
          font-size .4rem
          line-height 1rem
        .icon-57
          font-size .4rem
      .brandList
        list-style none
        padding 0 0
        margin 0 0
        display flex
        flex-flow row wrap
        justify-content space-around
        li
          width 3.5498rem
          margin-bottom .1rem
          height 2.6rem
          background-color #eee
          overflow hidden
          a
            text-decoration none
            color #666
            .brand-title
              width 50%
              height .6rem
              text-align left
              .brandName
                display inline-block
                font-size .32rem
                margin .2rem 0 .1rem .2rem
              .brandDetail
                display inline-block
                margin 0 0 0 .2rem
            img
              width 100%
              vertical-align center
              margin-top -0.4rem
    .newGoods
      overflow hidden
      .good-header
        width 100%
        height 2rem
        background-color #D1EEEE
        position relative
        .good-header-title
          width 2.4rem
          height 1.28rem
          position absolute
          left: 0
          right: 0
          top: 0
          bottom: 0
          margin auto
          span
            font-size .4rem
            color #676
            margin-bottom .2rem
          .all
            width 2.2rem
            height .6rem
            font-size .28rem
            color #676
            background-color lightgray
            position absolute
            left: 0
            right: 0
            margin auto
            margin-top .2rem
            line-height .6rem
      .GoodWraper
        .newGoodItem
          list-style none
          display flex
          flex-direction row
          justify-content space-between
          flex-wrap nowrap
          width 22rem
          padding 0
          li
            width 2.8rem
            margin-left .1rem
            margin-right .2rem
            height 4.2rem
            text-align left
            .imgWraper
              background-color #eee
              img
                width 2.8rem
                height 2.8rem
            .new-tag
              width .6rem
              height .35rem
              border-radius .05rem
              background-color #e5686d
              color #fff
            .name
              width 100px
              font-size .32rem
              font-weight bold
              margin-left 0
            .newGoodDescripe
              font-size .28rem
              color #676
              white-space: nowrap
              overflow hidden
              text-overflow ellipsis
            .price
              color #b4282d
    .popGoods
      overflow hidden
      .pops-header
        width 100%
        height 2rem
        background-color #FDF5E6
        position relative
        .pops-header-title
          width 3.4rem
          height 1.28rem
          position absolute
          left: 0
          right: 0
          top: 0
          bottom: 0
          margin auto
          span
            font-size .4rem
            color #676
            margin-bottom .2rem
          .all
            width 2.2rem
            height .6rem
            font-size .28rem
            color #676
            background-color lightgray
            position absolute
            left: 0
            right: 0
            margin auto
            margin-top .2rem
            line-height .6rem
      .GoodWraper
        .popGoodItem
          list-style none
          display flex
          flex-direction row
          justify-content space-between
          flex-wrap nowrap
          width 22rem
          padding 0
          li
            width 2.8rem
            margin-left .1rem
            margin-right .2rem
            height 4.2rem
            .imgWraper
              background-color #eee
              img
                width 2.8rem
                height 2.8rem
            .popDetail
              position relative
              .name
                font-size .32rem
                font-weight bold
                margin-left 0
                white-space: nowrap;
                overflow hidden
                text-overflow ellipsis
                position absolute
                left 0
                top 0
              .popGoodDescripe
                font-size .28rem
                color #676
                white-space: nowrap;
                overflow hidden
                text-overflow ellipsis
                position absolute
                left 0
                top .4rem
              .price
                color #b4282d
                position absolute
                left 0
                top .8rem
    .limitedGoods
      width 100%
      height 3.2rem
      /*background-color pink*/
      .limit-left
        width 3.2rem
        height 100%
        display inline-block
        margin-left 0
        float left
        h4
          font-size .4rem
          margin-top .6rem
          margin-bottom .4rem
        .countTime
          width 100%
          font-size .32rem
          font-weight bold
          margin-bottom .4rem
          .hour
            height .56rem
            border .07rem solid #444
            border-radius .07rem
            background-color #444
            font-weight bold
            color #fff
          .minute
            height .56rem
            border .07rem solid #444
            border-radius .07rem
            background-color #444
            font-weight bold
            color #fff
          .second
            height .56rem
            border .07rem solid #444
            border-radius .07rem
            background-color #444
            font-weight bold
            color #fff
      .limit-right
        width 3.2rem
        height 100%
        float left
        margin-left .6rem
        img
          width 3.2rem
          height 3.2rem
    .welfare
      width 100%
      height 3rem
      background-color aqua
      background-image url("http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg")
      background-size cover
    .goodChoice
      width 100%
      height 5.62rem
      /*background-color aqua*/
      .choice-header
        width 100%
        height 1.1rem
        background-color #FFF
        a
          text-decoration none
          color #666
          span
            font-size .4rem
            line-height 1.1rem
          i
            font-size .4rem
      .choice-item
        width 100%
        height 4.52rem
        overflow hidden
        ul
          list-style none
          padding 0
          width 12rem
          margin-left 0
          margin-top 0
          display flex
          flex-direction row
          /*justify-content space-between*/
          li
            margin-left .1rem
            margin-right .3rem
            a
              img
                height 160.98px
                width 287.5px
                vertical-align center
            .choice-detail
              position relative
              width 100%
              height 1rem
              h4
                text-align left
                margin 0.1rem 0 .1rem 0
              span
                position absolute
                top 0
                right .05rem
                color #b4282d
              p
                text-align left
                color #666
                margin 0
    .homeGood
      width 100%
      .homeHeader
        width 100%
        height 1.2rem
        h3
          line-height 1.2rem
      ul
        list-style none
        padding 0
        margin 0
        li
          width 3.45rem
          display inline-block
          margin-bottom .2rem
          margin-right .1rem
          .homeGoodWraper
            background-color #F4F4F4
            width 100%
            img
              width 100%
            .special
              width 100%
              height .69rem
              line-height .69rem
              text-align left
              color #9F8A60
              background-color #F1ECE2
              padding-left .1rem
              box-sizing border-box
          .homeGoodDet
            text-align left
            padding-left .1rem
            box-sizing border-box
            white-space: nowrap
            overflow hidden
            text-overflow ellipsis
          .homeGoodPri
            text-align left
            color red
            font-size .32rem
            padding-left .1rem
            box-sizing border-box
    .bottom
      width 100%
      height 2.5rem
      background-color #414141
      .download
        a
          text-decoration none
          display inline-block
          color #fff
          width 1.5rem
          height .62rem
          border 1px solid #999
          text-align center
          line-height .62rem
          margin-top .4rem
          margin-right .3rem
          margin-left .3rem
          margin-bottom .25rem
          border-radius .1rem

      .copyright
        p
          color #999
          margin-bottom .05rem
          margin-top .05rem
</style>
