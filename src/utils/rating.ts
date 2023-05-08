export default function rating(data: {
  rating_imdb_value: string | undefined
  rating_kinopoisk_value: string | undefined
  rating_local_value: string | undefined
}) {
  let imdb = data.rating_imdb_value ? Number(data.rating_imdb_value) : 0

  if (imdb > 0) {
    return imdb
  }

  let kinopoisk = data.rating_kinopoisk_value
    ? Number(data.rating_kinopoisk_value)
    : 0

  if (kinopoisk > 0) {
    return kinopoisk
  }

  let local = data.rating_local_value ? Number(data.rating_local_value) : 0

  if (local > 0) {
    return local
  }

  return 0
}
