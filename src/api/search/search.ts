import axios from '~/api/axios'

interface Request {
  query: string
}

export default {
  async get({ query }: Request) {
    const params = {
      'action[0]': 'Video.search',
      'query[0]': query
    }

    try {
      const response = await axios({
        method: 'POST',
        params
      })

      const data = await response.data

      if (data?.js[0]?.response?.movies) {
        return data.js[0].response
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
