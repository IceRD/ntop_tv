import axios from '~/api/axios'

interface Payload {
  pageParam: number | boolean
  genre?: number | null
}

const SIZE = 48

export default {
  async get({ pageParam = 0, genre = null }: Payload) {
    pageParam = Number(pageParam)

    const params = {
      'action[0]': 'Video.getCatalog',
      'size[0]': SIZE,
      'offset[0]': pageParam == 0 ? 0 : pageParam * SIZE,
      'genre[0]': genre
    }

    try {
      const response = await axios({
        method: 'POST',
        params
      })

      const data = await response.data

      if (data?.js[0]?.response?.movies) {
        return { ...data.js[0].response, pageParam }
      }

      return []
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message
      }

      return new Error('An unexpected error occurred')
    }
  }
}
