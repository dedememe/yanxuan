import {
  RECIEVE_BANNER
} from './mutation-type'

import {
  reqData,
  reqBanner
} from '../api'

export default {
  async getBanner ({commit}, callback) {
    const result = await reqBanner()
    const banner = result.focusList
    commit(RECIEVE_BANNER, {banner})
  }
}
