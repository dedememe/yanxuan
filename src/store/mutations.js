// import Vue from 'vue'
import {
  RECIEVE_DATA,
  RECIEVE_BANNER,
  RECIEVE_HOME,
  RECIEVE_DETAIL,
  RECIEVE_NAV
} from './mutation-type'

export default {
  [RECIEVE_BANNER] (state, {banner}) {
    state.banner = banner
  },
  [RECIEVE_DATA] (state, {data}) {
    state.data = data
  },
  [RECIEVE_HOME] (state, {home}) {
    state.home = home
  },
  [RECIEVE_DETAIL] (state, {detail}) {
    state.detail = detail
  },
  [RECIEVE_NAV] (state, {nav}) {
    state.nav = nav
  }
}
