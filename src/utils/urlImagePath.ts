import { API_URL } from '@env'

export const urlImagePath = (uri: string) => {
  if (!uri) return `${API_URL}/images/no-image.svg`

  return /^http/.test(uri) ? uri : `${API_URL}${uri}`
}
