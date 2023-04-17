/* eslint-disable */
import axios from 'axios'
import { API_URL } from '@env'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.common['Referer'] = API_URL

axios.defaults.baseURL = API_URL
axios.defaults.timeout = 2000

axios.interceptors.request.use(
  function (config) {
    const query = {
      format: 'ajax',
      JsHttpRequest: Date.now() + '-xml',
      PHPSESSID: 'n7t4aahad2vl59c9cl7329drp7'
    }

    const params = new URLSearchParams(query).toString()
    config.url = 'api.php?' + params
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
