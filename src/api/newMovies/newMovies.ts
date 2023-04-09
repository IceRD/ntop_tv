import axios from '~/api/axios'

export default {
  async get() {
    try {
      const response = await axios({
        method: 'POST',
        params: { 'action[0]': 'Video.getNewmovies' }
      })

      const data = await response.data

      if (data?.js[0]?.response?.newmovies) {
        return data.js[0].response.newmovies
      }

      return []
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message
      }

      return 'An unexpected error occurred'
    }
  }
}
