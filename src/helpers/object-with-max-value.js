

export const objectMax = (array, key) => {
  const maxValue = Math.max(...array.map((obj) => obj[key]))
  const index = array.map((obj) => obj[key]).indexOf(maxValue)
  return array[index]
}