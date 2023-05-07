import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async function ({ query }, { rejectWithValue }) {
    const cyrillicPattern = /[\u0400-\u04FF]/

    const params = {
      'action[0]': 'Video.search',
      'query[0]': query
    }

    try {
      const response = await axios({
        method: 'POST',
        params,
        paramsSerializer: {
          encode: (param: string) => {
            if (cyrillicPattern.test(param)) {
              return escape(param)
            }
            return param
          }
        }
      })

      if (response.status !== 200) {
        throw new Error('Server error!')
      }

      const data = await response.data

      if (data?.js[0]?.response?.movies) {
        return data.js[0].response.movies
      }
    } catch (error) {
      return rejectWithValue({ error: error.message })
    }
  }
)
