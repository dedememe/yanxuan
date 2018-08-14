// import Vue from 'vue'
import {
  RECIEVE_BANNER
} from './mutation-type'

export default {
  [RECIEVE_BANNER] (state, {banner}) {
    state.banner = banner
  }
}
