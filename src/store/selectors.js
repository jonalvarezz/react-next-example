export const getCurrentItem = store => {
  const { current, activeItem } = store
  const collection = store[current] || []
  const coincidences = collection.filter(item => item.id === activeItem)
  const item = coincidences.length > 0 ? coincidences[0] : {}

  return item
}
