function parseFiles(items: any[]) {
  const obj: any = {}

  for (let i = 0; i < items.length; i++) {
    let currentEl = items[i]
    let id = currentEl?.resolution_id

    if (!id) continue

    if (obj[id] === undefined) {
      obj[id] = {}
    }

    let arr = currentEl.name.split('.')
    let seasonIndex = arr.find(el => el.indexOf('season') !== -1)
    let season_id

    /**
     * Если файлов много и нет привязки к сезону, указываем по дефолту Без группы
     */
    if (seasonIndex === undefined) {
      season_id = 'Без группы'
    } else {
      let season = seasonIndex.split('_')
      season_id = season[season.length - 1]
        .replace(/[^a-z0-9]/gi, '')
        .replace('season', 'Сезон ')
    }

    let name = arr.find(el => el.indexOf('CD') !== -1) || 'CDXX'

    if (obj[id][season_id] === undefined) {
      obj[id][season_id] = []
    }

    obj[id][season_id].push({ ...currentEl, name })
  }

  const normalize: any = {}

  for (const [key, val] of Object.entries(obj)) {
    if (normalize[key] === undefined) {
      normalize[key] = { items: [] }
    }

    for (const [title, value] of Object.entries(val)) {
      normalize[key].items.push({
        title,
        value
      })
    }
  }

  return normalize
}

export default parseFiles
