export type StatusSeriesType = '0' | '1' | '2'
export type HDType = '0' | '1'

export interface ICard {
  movie_id: string
  name: string
  international_name: string
  year: string
  StatusSeries: StatusSeriesType
  created_at: string
  updated_at: string
  translation: string
  resolution_id: string
  quality: string
  hidden: string
  hd: HDType
  hit: string
  genres: string[]
  countries: string[]
  rating_local_value: string
  rating_local_count: string
  rating_imdb_value: string
  rating_imdb_count: string
  rating_kinopoisk_value: string
  rating_kinopoisk_count: string
  cast: string[]
  directors: string[]
  popular: string
  resolution_name: string
  short_translation: string
  cover: string
  cover_original: string
}
