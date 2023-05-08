import now from './now'

export default function throttle(func: Function, wait: number, options: any) {
  let timeout: number | null
  let context: any
  let args: any
  let result: any
  let previous = 0
  if (!options) options = {}

  let later = function () {
    previous = options.leading === false ? 0 : now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  let throttled = function () {
    let _now = now()
    if (!previous && options.leading === false) previous = _now
    let remaining = wait - (_now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = _now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }

  throttled.cancel = function () {
    clearTimeout(timeout)
    previous = 0
    timeout = context = args = null
  }

  return throttled
}
