export default function showInfo(item: {
  year: string | undefined
  countries: string[] | undefined
  quality: string | undefined
  hd: string | undefined
}) {
  console.log({ item })

  const arr = []
  if (item.year !== null) {
    arr.push(item.year)
  }

  if (
    item.countries !== undefined &&
    Array.isArray(item.countries) &&
    item.countries.length > 0
  ) {
    arr.push(item.countries.join(','))
  }

  if (item.quality !== undefined && item.quality !== '') {
    arr.push(item.quality)
  } else if (item.hd !== undefined && Number(item.hd) >= 1) {
    arr.push('HD')
  }

  return arr.join(' | ')
}
