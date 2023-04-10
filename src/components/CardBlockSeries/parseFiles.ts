function parseFiles(items: any[]) {
  const obj: any = {}

  for (let i = 0; i < items.length; i++) {
    let currentEl = items[i]
    let id = currentEl.resolution_id

    if (obj[id] === undefined) {
      obj[id] = {}
    }

    let n = currentEl.name.split('.')[0]
    let season_id = n.split('_').pop()

    if (obj[id][season_id] === undefined) {
      obj[id][season_id] = []
    }

    obj[id][season_id].push(currentEl)
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
