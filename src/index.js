export default function (map) {
  const entries = [...map.entries()]
  if (entries.length === 0) {
    return
  }
  return entries.reduce((curr, [key, value]) => {
    curr[key] = value
    return curr
  }, {})
}
