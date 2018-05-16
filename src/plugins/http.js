import axios from 'axios'
import {API_URL} from './../config'

// allow use http client without Vue instance
export const http = axios.create({
  baseURL: API_URL
})

export default ({Vue}) => {
  http.interceptors.response.use(
    response => response,
    /**
     * This is a central point to handle all
     * error messages generated by HTTP
     * requests
     */
    (error) => {
      // catch all errors

      /* if (error.response.status === 404) {
          return router.replace({name: 'not-found'});
      } */

      return Promise.reject(error)
    }
  )
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
