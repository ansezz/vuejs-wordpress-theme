import WPAPI from 'wpapi'
import {WP_API_URL} from './../config'

// allow use http client without Vue instance
export const wp = new WPAPI({endpoint: WP_API_URL})

export default ({Vue}) => {
  Object.defineProperty(Vue.prototype, '$wp', {
    get () {
      return wp
    }
  })
}
