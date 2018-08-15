import {
  RECIEVE_BANNER,
  RECIEVE_DATA,
  RECIEVE_HOME,
  RECIEVE_DETAIL,
  RECIEVE_NAV
} from './mutation-type'

import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'

export default {
  //  获取Msite导航栏滚动条数据
  async getData ({commit}, callback) {
    const result = await reqData()
    if (result.code===0) {
      const data = result.data
      commit(RECIEVE_DATA, {data})
      callback & callback()
    }

  },

  //  获取Msite轮播图图片数据
  async getBanner ({commit}, callback) {
    const result = await reqBanner()
    if (result.code === 0) {
      const banner = result.focusList
      commit(RECIEVE_BANNER, {banner})
      callback && callback()
    }
  },

  //  获取Msite新品首发图片
  async getHome ({commit}, cb) {
    const result = await reqHome()
    if (result.code === 0) {
      const home = result.home
      commit(RECIEVE_HOME, {home})
      cb && cb()
    }
  },

  //  获取distinguish轮播图数据/频道数据
  async getDetail ({commit}, cb) {
    const result =  await reqDetail()
    if (result.code === 0) {
      const detail = result.detail
      commit(RECIEVE_DETAIL, {detail})
      cb && cb()
    }
  },

//  获取classification页面数据
  async getNav ({commit}, cb) {
    const result =  await reqNav()
    if (result.code === 0) {
      const nav = result.nav
      commit(RECIEVE_NAV, {nav})
      cb & cb()
    }
  }
}
