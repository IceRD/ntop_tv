import axios from '~/api/axios'

interface Request {
  movie_id: string | number
}

type Cover = {
  original: string
  thumbnail: string
}
type File = {
  active: string
  file_id: string
  links: {
    download: string
  }
  metainfo: {
    playtime: string
  }
  name: string
  quality: string
  resolution_name: string
  size: string
}

type StatusSeries = '0' | '1' | '2'

interface Response {
  countries: string[]
  name: string
  description: string
  covers: Cover[]
  files: File[]
  genres: string[]
  hd: string
  quality: string
  resolution_name: string
  year: string
  other_movies: string[]
  rating_imdb_value: string
  rating_kinopoisk_value: string
  StatusSeries: StatusSeries
}

export default {
  async get({ movie_id }: Request): Promise<Response> {
    try {
      const response = await axios({
        method: 'POST',
        params: { 'action[0]': 'Video.getMovie', 'movie_id[0]': movie_id }
      })

      const data = await response.data

      if (data?.js[0]?.response?.movie) {
        return data.js[0].response.movie
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
