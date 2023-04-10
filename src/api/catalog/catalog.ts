import axios from '~/api/axios'

const SIZE = 48

export default {
  async get({ page = 0, genre = null }) {
    const params = {
      'action[0]': 'Video.getCatalog',
      'size[0]': SIZE,
      'offset[0]': page <= 1 ? 0 : page * SIZE,
      'genre[0]': genre
    }

    try {
      const response = await axios({
        method: 'POST',
        params
      })

      const data = await response.data

      if (data?.js[0]?.response?.movies) {
        return data.js[0].response.movies
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
