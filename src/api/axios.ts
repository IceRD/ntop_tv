import axios from 'axios'
import { API_URL } from '@env'
import { isDevelopment } from '~/utils/environment'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.common['Referer'] = API_URL

axios.defaults.baseURL = API_URL
axios.defaults.timeout = 10000

axios.interceptors.request.use(
  function (request) {
    if (isDevelopment) {
      console.log({ request })
    }

    const query = {
      format: 'ajax',
      JsHttpRequest: Date.now() + '-xml',
      PHPSESSID: 'n7t4aahad2vl59c9cl7329drp7'
    }

    const params = new URLSearchParams(query).toString()
    request.url = 'api.php?' + params
    return request
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    if (isDevelopment) {
      console.log({ response })
    }

    return response
  },
  function (error) {
    if (isDevelopment) {
      console.log({ error })
    }

    return Promise.reject(error)
  }
)

export default axios
