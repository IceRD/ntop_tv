/* eslint-disable */
import axios from 'axios'
import { API_URL } from '@env'

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.baseURL = API_URL

axios.interceptors.request.use(
  function (config) {
    const query = {
      format: 'ajax',
      JsHttpRequest: Date.now() + '-xml'
    }

    const params = new URLSearchParams(query).toString()
    config.url = 'api.php?' + params
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
