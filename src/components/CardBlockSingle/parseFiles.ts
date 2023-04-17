function parseFiles(items: any[]) {
  const obj: any = {}

  for (let i = 0; i < items.length; i++) {
    let currentEl = items[i]
    let ext = currentEl.links.download.split('.').pop()

    if (ext.includes('mkv')) {
      continue
    }

    let id = currentEl?.resolution_id

    if (!id) continue

    if (obj[id] === undefined) {
      obj[id] = {
        items: []
      }
    }

    let name = 'CD01'

    obj[id].items.push({ ...currentEl, name, ext })
  }

  return obj
}

export default parseFiles
